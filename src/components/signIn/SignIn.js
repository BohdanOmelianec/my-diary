import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../img/signin_logo.svg';
import { setToken } from '../../redux/rootReducer';
import Header from '../header/Header';
import APIService from '../../service/APIService';

import './signIn.scss';

const apiService = new APIService();

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const isOnline = useSelector(state => state.reducerNew.isOnline)
    
    const dispatch = useDispatch();


    const signIn = (e) => {
        e.preventDefault();
        setError(false);
        
        if(email && password) {
            setLoading(true);
            const data = {
                email,
                password
            };

            apiService.authorisation('auth/login', data)
                .then(res => {
                    setLoading(false)
                    dispatch(setToken(res.token))
                })
                .catch(() => setError(true))
                // .finally(() => setLoading(false))
        } else {
            setError(true)
        }
    }

    const disabledStyle = {
        borderColor: '#949494',
        backgroundColor: '#f3f3f3',
        color: '#7d7d7d'
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
                        style={loading ? disabledStyle : null}
                        placeholder='邮件地址...'
                        autoComplete='off'
                        value={email}
                        onChange={ e => setEmail(e.target.value)}>
                    </input>

                    <span className='signIn__label'>密码</span>
                    <input className='signIn__input' 
                        type='password'
                        style={loading ? disabledStyle : null} 
                        placeholder='密码...'
                        value={password}
                        onChange={ e => setPassword(e.target.value)}>
                    </input>
                    
                    <input className='signIn__submitInput'
                        type='submit'
                        value='登录'
                        style={{backgroundColor: loading ? '#939393' : '#291e1e', border: 'none'}} 
                        onClick={signIn}/>
                    <Link to='/sign-up' className='signIn__question'>没有帐号？注册</Link>
                </form>
            </div>
        </>
    )
}

export default SignIn;