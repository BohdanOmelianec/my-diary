import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import { signout, setSelectedId, setPosts } from '../../redux/rootReducer';
import APIService from '../../service/APIService';

import './myDiary.scss';
import plus from '../../img/plus.png';

const apiService = new APIService();

function MyDiary() {
    const [myself, setMyself] = useState({});
    const [error, setError] = useState('');
    const posts = useSelector(state => state.reducerNew.posts);
    const isOnline = useSelector(state => state.reducerNew.isOnline);
    const token = useSelector(state => state.reducerNew.token);

    const history = useHistory();
    const dispatch = useDispatch();
    

    useEffect(() => {
        if(!token) return;
        
        apiService.getResource(`users/me?authsessiontoken=${token}`)
            .then(res => setMyself(res))
            .catch(() => setError(true));
        
        apiService.getResource(`users/me/posts?count=100&page=1&authsessiontoken=${token}`)
            .then(res => dispatch(setPosts(res)))
            .catch(() => setError(true));
    }, [dispatch, token]);

    const viewPost = (id) => {
        dispatch(setSelectedId(id))
        history.push('/view-post')
    }

    const content = posts.map(post => {
        const date = new Date(post.created_at);
        const created = `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`;

        return <li className='diaryBlock__item'
                    key={post.id}
                    onClick={() => viewPost(post.id)}>
                    <div className='diaryBlock__item_block'>
                        <span className='diaryBlock__item_title'>{post.title}</span>
                        <span className='diaryBlock__item_created'>{created}</span>
                    </div>
                </li>
    })

    return (
        <>
            {isOnline ? null : <Redirect to='/sign-in' />}

            <div className='diaryBlock'>
                <Header>
                    <span className='myDiarySpansSm'>{myself.name ? myself.name : ''}</span>
                    <span className='myDiarySpans'>我的日记</span>
                    <span className='myDiarySpansSm' onClick={() => dispatch(signout())}>退出</span>
                </Header>
                <ul className='diaryBlock__list'>
                    <Link to='/new-post'><li className='diaryBlock__item'><img src={plus} alt='plus' className='plusImg' /></li></Link>
                    {error ? 'Something went wrong.' : null}
                    {!error && posts ? content : 'Loading...'}
                </ul>
            </div>
            
        </>
    );
};

export default MyDiary;