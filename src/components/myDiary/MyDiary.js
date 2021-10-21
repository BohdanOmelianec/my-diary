import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/Header';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';

import './myDiary.scss';
import plus from '../../img/plus.png';
import { signout, setSelectedItem } from '../../redux/rootReducer';


const MyDiary = () => {
    const name = useSelector(state => state.reducerNew.currentUser.name);
    const signedUp = useSelector(state => state.reducerNew.signedUp);
    const posts = useSelector(state => state.reducerNew.posts);
    const dispatch = useDispatch();
    const history = useHistory();

    const onEdit = (id) => {
        dispatch(setSelectedItem(id))
        history.push('/edit-item')
    }

    const content = posts.map(post => {
        return <li className='diaryBlock__item'
                    key={post.id}
                    onClick={() => onEdit(post.id)}>
                    <div className='diaryBlock__item_block'>
                        <span className='diaryBlock__item_title'>{post.title}</span>
                        <span className='diaryBlock__item_created'>{post.created_at}</span>
                    </div>
                </li>
    })

    return (
        <>
            {signedUp ? null : <Redirect to='/sign-in' />}

            <div className='diaryBlock'>
                <Header>
                    <span className='myDiarySpansSm'>{name ? name : '陈奕迅'}</span>
                    <span className='myDiarySpans'>我的日记</span>
                    <span className='myDiarySpansSm' onClick={() => dispatch(signout())}>退出</span>
                </Header>
                <ul className='diaryBlock__list'>
                    <Link to='/diary-item'><li className='diaryBlock__item'><img src={plus} alt='plus' className='plusImg' /></li></Link>
                    {content}
                </ul>
            </div>
            
        </>
    );
};

export default MyDiary;