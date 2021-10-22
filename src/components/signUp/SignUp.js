import React, { useState } from 'react';
import Header from '../header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setToken } from '../../redux/rootReducer';
import APIService from '../../service/APIService';

import './signUp.scss';
import logo from '../../img/signin_logo.svg';

const apiService = new APIService();

function SignIn() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false)
    const isOnline = useSelector(state => state.reducerNew.isOnline)
    const dispatch = useDispatch();


    const emailCheck = new RegExp(/^\S{3,}@\S{2,}\.\D{2,}/);
    const passCheck = new RegExp(/\S{6,}/); // const passCheck = new RegExp(/(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}/);

    const signUp = (e) => {
        e.preventDefault();
        if(emailCheck.test(email) && passCheck.test(password) && name.length > 3) {
            const data = {
                name,
                email,
                password
            };

            apiService.authorisation('auth/register', data)
                .then(res => dispatch(setToken(res.token)))
                .catch(() => setError(true))
        } else {
            setError(true)
        }
    }

    return(
        <>
            {isOnline ? <Redirect to='/my-diary' /> : null}
            <Header><span className='signUpHeader'>注册</span></Header>
            <div className='wrapperUp'>
                <img src={logo} alt="logo"></img>
                <span className='errorMsg' style={{display: error ? 'block' : 'none'}}>账号或密码错误</span>
                <form className='signUp' autoComplete='off'>
                    <span className='signUp__label'>名字</span>
                    <input className='signUp__input' 
                        type='name' 
                        placeholder='名字...'
                        value={name}
                        onChange={ e => setName(e.target.value)}>
                    </input>

                    <span className='signUp__label'>邮件地址</span>
                    <input className='signUp__input' 
                        type='email' 
                        placeholder='邮件地址...'
                        value={email}
                        onChange={ e => setEmail(e.target.value)}>
                    </input>

                    <span className='signUp__label'>密码</span>
                    <input className='signUp__input' 
                        type='password' 
                        placeholder='密码...'
                        value={password}
                        onChange={ e => setPassword(e.target.value)}>
                    </input>
                    
                    <input className='signUp__submitInput'
                        type='submit'
                        value='注册' 
                        onClick={signUp}/>
                    <Link to='/sign-in' className='signUp__question'>已有帐号？去登录</Link>
                </form>

            </div>
        </>
    )
}

export default SignIn;