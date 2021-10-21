import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Header from '../header/Header';
import {useHistory} from 'react-router'

import { signout, updatePost, setSelectedItem } from '../../redux/rootReducer';
import './editItem.scss';

const EditItem = () => {
    const selectedItem = useSelector(state => state.reducerNew.selectedItem);

    const [title, setTitle] = useState(selectedItem ? selectedItem[0].title : '');
    const [content, setContent] = useState(selectedItem ? selectedItem[0].content : '');
    const [error, setError] = useState(false);
    const signedUp = useSelector(state => state.reducerNew.signedUp);
    
    const dispatch = useDispatch();
    const history = useHistory()
    

    const editPost = (e) => {
        e.preventDefault();
        if(title && content) {
            dispatch(updatePost({
                ...selectedItem[0],
                title,
                content
            }))
            dispatch(setSelectedItem())
            history.push("/my-diary");
        } else {
            setError(true);
        }
        
    }

    return (
        <>
            {signedUp ? null : <Redirect to='/sign-in' />}
            <Header>
                <Link to='/my-diary'><span className='myDiarySpansSm' onClick={() => dispatch(setSelectedItem())} >'退回</span></Link>
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
                    onClick={editPost}/>
            </div>
        </>
    );
};

export default EditItem;