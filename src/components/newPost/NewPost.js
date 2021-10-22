import React, {useState} from 'react';
import Header from '../header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {useHistory} from 'react-router'
import { signout, addPost } from '../../redux/rootReducer';
import APIService from '../../service/APIService';

import './newPost.scss';


const apiService = new APIService();


const NewPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(false);
    const isOnline = useSelector(state => state.reducerNew.isOnline);
    const token = useSelector(state => state.reducerNew.token);
    const history = useHistory();

    const dispatch = useDispatch();
    

    const addPost = async (e) => {
        e.preventDefault();

        if(title && content) {
            const data = {
                title, 
                content,
            }
            const responce = await apiService.postResource(`posts?authsessiontoken=${token}`, data)
                .then(res => res)
                .catch(() => setError(true));
            dispatch(addPost(responce))
            history.push("/my-diary");
        }

        // fetch(`https://illia-ef1b38.postdemo.tcn.asia/api/v2/posts`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'authsessiontoken': `${token}` 
        //         },
        //         body: JSON.stringify({
        //             title, 
        //             content,
        //         })
        //     })
    }

    return (
        <>
            {isOnline ? null : <Redirect to='/sign-in' />}
            <Header>
                <Link to='/my-diary'><span className='myDiarySpansSm' >退回</span></Link>
                <span className='myDiarySpans'>新日记条目</span>
                <span className='myDiarySpansSm' onClick={() => dispatch(signout())}>退出</span>
            </Header>
            
            <div className='item__container'>
                <span className='item__errorMsg' style={{display: error ? 'block' : 'none'}}>创建帖子时出错!</span>
                <span className='item__title'>标题</span>
                <input className='item__input' 
                    type='text' 
                    placeholder='日记条目标题...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <span className='item__title'>内容</span>
                <textarea className='item__textarea' 
                    type='text'
                    value={content}
                    placeholder='日记条目内容...'
                    onChange={(e) => setContent(e.target.value)}
                />
                <input className='item__submitInput'
                    type='submit'
                    value='注册'
                    onClick={addPost}/>
            </div>
        </>
    );
};

export default NewPost;