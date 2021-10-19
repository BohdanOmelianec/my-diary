import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../img/signin_logo.svg';
import Header from '../header/Header';

import './signIn.scss';

export default function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // const emailCheck = new RegExp(/^\S{3,}@\S{2,}\.\D{2,}/);
    // const passCheck = new RegExp(/(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}/);
   

    return(
        <>
            <Header><span className='signInHeader'>登录</span></Header>
            <div className='wrapper'>
                <img src={logo} alt="logo"></img>
                
                <form className='signIn' autoComplete='off'>
                    <span className='signIn__label'>邮件地址</span>
                    <input className='signIn__input' 
                        type='email' 
                        placeholder='邮件地址...'
                        value={email}
                        onChange={ e => {setEmail(e.target.value)}}>
                    </input>
                    <span className='signIn__label'>密码</span>
                    <input className='signIn__input' 
                        type='password' 
                        placeholder='密码...'
                        value={password}
                        onChange={ e =>  {setPassword(e.target.value)}}>
                    </input>
                    
                    {/* <Incorect>Incorect email or password</Incorect> */}
                    <input className='signIn__submitInput'
                        type='submit'
                        value='登录' 
                        onClick={(e) =>{}}/>
                    <Link to='/sign-up' className='signIn__question'>没有帐号？注册</Link>
                </form>

            </div>
        </>
    )
}