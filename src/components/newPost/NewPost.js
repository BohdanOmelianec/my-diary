import React, {useState} from 'react';
import Header from '../header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {useHistory} from 'react-router'
import { signout } from '../../redux/rootReducer';
import APIService from '../../service/APIService';

import './newPost.scss';


const apiService = new APIService();


function NewPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const isOnline = useSelector(state => state.reducerNew.isOnline);
    const token = useSelector(state => state.reducerNew.token);
    const history = useHistory();

    const dispatch = useDispatch();
    

    const addPost =  () => {
        setLoading(true)

        if(title && content) {
            setLoading(true)
            const data = {
                title, 
                content,
            }
            apiService.postResource('posts', data, token)
                .then(() => {
                    setLoading(false)
                    history.push("/my-diary")
                })
                .catch(() => setError(true))
        } else {
            setError(true)
        }
    }

    const disabledStyle = {
        borderColor: '#949494',
        backgroundColor: '#f3f3f3',
        color: '#7d7d7d'
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
                    style={loading ? disabledStyle : null}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <span className='item__title'>内容</span>
                <textarea className='item__textarea' 
                    type='text'
                    value={content}
                    placeholder='日记条目内容...'
                    style={loading ? disabledStyle : null}
                    onChange={(e) => setContent(e.target.value)}
                />
                <input className='item__submitInput'
                    type='submit'
                    value='注册'
                    style={{backgroundColor: loading ? '#939393' : '#291e1e', border: 'none'}}
                    onClick={addPost}/>
            </div>
        </>
    );
};



export default NewPost;