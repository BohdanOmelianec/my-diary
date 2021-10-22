import React, {useState, useEffect} from 'react';
import Header from '../header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signout, setSelectedId } from '../../redux/rootReducer';
import APIService from '../../service/APIService';

import './viewPost.scss';

const apiService = new APIService();

const ViewPost = () => {
    const [error, setError] = useState(false);
    const [post, setPost] = useState(null);
    const isOnline = useSelector(state => state.reducerNew.isOnline);
    const token = useSelector(state => state.reducerNew.token);
    const id = useSelector(state => state.reducerNew.selectedId);

    const dispatch = useDispatch();
    

    useEffect(() => {
        apiService.getResource(`posts/${id}?authsessiontoken=${token}`)
            .then(res => setPost(res))
            .catch(() => setError(true));
    }, [])

    return (
        <>
            {isOnline ? null : <Redirect to='/sign-in' />}
            <Header>
                <Link to='/my-diary'><span className='myDiarySpansSm' onClick={() => dispatch(setSelectedId())} >退回</span></Link>
                <span className='myDiarySpans'>新日记条目</span>
                <span className='myDiarySpansSm' onClick={() => dispatch(signout())}>退出</span>
            </Header>
            
            <div className='post__container'>
                <div className='post__header'>
                    <span className='post__title'>{post ? post.title : '下午的事情'}</span>
                    <span className='post__title'>{post ? post.created_at : '2020年8月3日'}</span>
                </div>
                <div className='post__content'>{post ? post.content : '下午的事情'}</div>
            </div>
        </>
    );
};

export default ViewPost;