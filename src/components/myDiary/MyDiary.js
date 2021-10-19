import React from 'react';
import Header from '../header/Header';

import './myDiary.scss';

const MyDiary = () => {
    return (
        <>
            
            <div className='diaryBlock'>
                <Header>
                    <span className='myDiarySpansSm'>陈奕迅</span>
                    <span className='myDiarySpans'>我的日记</span>
                    <span className='myDiarySpansSm'>退出</span>
                </Header>
                <ul className='diaryBlock__list'>
                    <li className='diaryBlock__item'></li>
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