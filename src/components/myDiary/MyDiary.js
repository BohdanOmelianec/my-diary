import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import { signout, setSelectedId, setPosts } from '../../redux/rootReducer';

import './myDiary.scss';
import plus from '../../img/plus.png';


const MyDiary = () => {
    const [myself, setMyself] = useState({});
    const [error, setError] = useState('');
    const posts = useSelector(state => state.reducerNew.posts);
    const isOnline = useSelector(state => state.reducerNew.isOnline);
    const token = useSelector(state => state.reducerNew.token);

    const history = useHistory();
    const dispatch = useDispatch();
    

    


    useEffect(() => {
        fetch(`https://illia-ef1b38.postdemo.tcn.asia/api/v2/users/me?authsessiontoken=${token}`)
            .then(res => {
                if(!res.ok) {
                    throw new Error(`Could not fetch this url status: ${res.status}`);
                }
                return res.json();
            })
            .then(res => setMyself(res))
            .catch(() => setError(true));
        fetch(`https://illia-ef1b38.postdemo.tcn.asia/api/v2/users/me/posts?authsessiontoken=${token}`)
            .then(res => {
                if(!res.ok) {
                    throw new Error(`Could not fetch this url status: ${res.status}`);
                }
                return res.json();
            })
            .then(res => dispatch(setPosts(res)))
            .catch(() => setError(true));
    }, [])

    const viewPost = (id) => {
        dispatch(setSelectedId(id))
        history.push('/view-post')
    }

    const content = posts.map(post => {
        return <li className='diaryBlock__item'
                    key={post.id}
                    onClick={() => viewPost(post.id)}>
                    <div className='diaryBlock__item_block'>
                        <span className='diaryBlock__item_title'>{post.title}</span>
                        <span className='diaryBlock__item_created'>{post.created_at}</span>
                    </div>
                </li>
    })

    return (
        <>
            {isOnline ? null : <Redirect to='/sign-in' />}

            <div className='diaryBlock'>
                <Header>
                    <span className='myDiarySpansSm'>{myself.name ? myself.name : '陈奕迅'}</span>
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