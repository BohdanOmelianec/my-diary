import React, {useState, useEffect} from 'react';
import Header from '../header/Header';
import Loading from '../loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signout, setSelectedId } from '../../redux/rootReducer';
import APIService from '../../service/APIService';

import './viewPost.scss';

const apiService = new APIService();

function ViewPost() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);
    const isOnline = useSelector(state => state.reducerNew.isOnline);
    const token = useSelector(state => state.reducerNew.token);
    const id = useSelector(state => state.reducerNew.selectedId);

    const dispatch = useDispatch();
    

    useEffect(() => {
        if(!token) return;

        apiService.getResource(`posts/${id}?authsessiontoken=${token}`)
            .then(res => {
                setLoading(false)
                setPost(res)
            })
            .catch(() => setError(true));
    }, [id, token])

    const date = new Date(post?.created_at);
    const created = `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`;

    return (
        <>
            {isOnline ? null : <Redirect to='/sign-in' />}
            <Header>
                <Link to='/my-diary'><span className='myDiarySpansSm' onClick={() => dispatch(setSelectedId())} >退回</span></Link>
                <span className='myDiarySpans'>新日记条目</span>
                <span className='myDiarySpansSm' onClick={() => dispatch(signout())}>退出</span>
            </Header>
            {loading ? <Loading/> :
            <div className='post__container'>
                <span className='item__errorMsg' style={{display: error ? 'block' : 'none'}}>查看帖子时出错！</span>
                
                <div className='post__header'>
                    <span className='post__title'>{post ? post.title : '下午的事情'}</span>
                    <span className='post__title'>{post ? created : '2020年8月3日'}</span>
                </div>
                <div className='post__content'>{post ? post.content : '下午的事情'}</div>
            </div>}
        </>
    );
};

export default ViewPost;