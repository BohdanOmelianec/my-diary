import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../img/signin_logo.svg';
import Header from '../header/Header';

import './signUp.scss';

export default function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // const emailCheck = new RegExp(/^\S{3,}@\S{2,}\.\D{2,}/);
    // const passCheck = new RegExp(/(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}/);
   

    return(
        <>
            <Header><span className='signUpHeader'>注册</span></Header>
            <div className='wrapper'>
                <img src={logo} alt="logo"></img>
                
                <form className='signUp' autoComplete='off'>
                    <span className='signUp__label'>名字</span>
                    <input className='signUp__input' 
                        type='email' 
                        placeholder='名字...'
                        value={email}
                        onChange={ e => {setEmail(e.target.value)}}>
                    </input>

                    <span className='signUp__label'>邮件地址</span>
                    <input className='signUp__input' 
                        type='email' 
                        placeholder='邮件地址...'
                        value={email}
                        onChange={ e => {setEmail(e.target.value)}}>
                    </input>

                    <span className='signUp__label'>密码</span>
                    <input className='signUp__input' 
                        type='password' 
                        placeholder='密码...'
                        value={password}
                        onChange={ e =>  {setPassword(e.target.value)}}>
                    </input>
                    
                    {/* <Incorect>Incorect email or password</Incorect> */}
                    <input className='signUp__submitInput'
                        type='submit'
                        value='注册' 
                        onClick={(e) =>{}}/>
                    <Link to='/sign-in' className='signUp__question'>已有帐号？去登录</Link>
                </form>

            </div>
        </>
    )
}