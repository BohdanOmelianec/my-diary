import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../img/signin_logo.svg';
import { setToken } from '../../redux/rootReducer';
import Header from '../header/Header';
import './signIn.scss';




export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const isOnline = useSelector(state => state.reducerNew.isOnline)
    
    const dispatch = useDispatch();


    const signIn = (e) => {
        e.preventDefault();
        fetch('https://illia-ef1b38.postdemo.tcn.asia/api/v2/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => {
                if(!res.ok) {
                    throw new Error(`Could not fetch this url status: ${res.status}`);
                }
                return res.json();
            })
            .then(res => dispatch(setToken(res.token)))
            .catch(() => setError(true))
    }

    return(
        <>
            {isOnline ? <Redirect to='/my-diary' /> : null}
            <Header><span className='signInHeader'>登录</span></Header>
            <div className='wrapper'>
                <img src={logo} alt="logo"></img>
                <span className='errorMsg' style={{display: error ? 'block' : 'none'}}>账号或密码错误</span>

                <form className='signIn' autoComplete='off'>
                    <span className='signIn__label'>邮件地址</span>
                    <input className='signIn__input' 
                        type='email' 
                        placeholder='邮件地址...'
                        autoComplete='off'
                        value={email}
                        onChange={ e => setEmail(e.target.value)}>
                    </input>

                    <span className='signIn__label'>密码</span>
                    <input className='signIn__input' 
                        type='password' 
                        placeholder='密码...'
                        value={password}
                        onChange={ e => setPassword(e.target.value)}>
                    </input>
                    
                    <input className='signIn__submitInput'
                        type='submit'
                        value='登录' 
                        onClick={signIn}/>
                    <Link to='/sign-up' className='signIn__question'>没有帐号？注册</Link>
                </form>

            </div>
        </>
    )
}