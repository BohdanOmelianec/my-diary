import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/Header';

import './myDiary.scss';
import plus from '../../img/plus.png';
import { signout } from '../../redux/rootReducer';
import { Redirect } from 'react-router';

const MyDiary = () => {
    const name = useSelector(state => state.reducerNew.currentUser.name);
    const signedUp = useSelector(state => state.reducerNew.signedUp)
    const dispatch = useDispatch();
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
                    <li className='diaryBlock__item'><img src={plus} alt='plus' className='plusImg' /></li>
                    <li className='diaryBlock__item'></li>
                    <li className='diaryBlock__item'></li>
                    <li className='diaryBlock__item'></li>
                    <li className='diaryBlock__item'></li>
                    <li className='diaryBlock__item'></li>
                    <li className='diaryBlock__item'></li>
                    <li className='diaryBlock__item'></li>
                    <li className='diaryBlock__item'></li>
                </ul>
            </div>
            
        </>
    );
};

export default MyDiary;