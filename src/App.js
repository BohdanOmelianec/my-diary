import React, { useEffect } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
// import Header from './components/header/Header';
import SignIn from './components/signIn/SignIn';
import SignOut from './components/SignOut';
import SignUp from './components/signUp/SignUp';
import MyDiary from './components/myDiary/MyDiary';

import './style.scss';


function App() {
    useEffect(() => {
        <Redirect to='sign-in'/>
    })
    return (
        <>
            {/* <NavLink to='/sign-in' className='main_link'>Sign in</NavLink>
            <NavLink to='/sign-up' className='main_link'>Sign up</NavLink>
            <NavLink to='/sign-out' className='main_link'>Sign out</NavLink>
            <NavLink to='/my-diary' className='main_link'>My Diary</NavLink> */}
            {/* <Header>er</Header> */}
            <div id="content">
                <Switch>
                    <Route exact path='/'>
                        <SignIn/>
                    </Route>
                    <Route exact path='/sign-in'>
                        <SignIn/>
                    </Route>
                    <Route exact path='/sign-up'>
                        <SignUp/>
                    </Route>
                    <Route exact path='/sign-out'>
                        <SignOut/>
                    </Route>
                    <Route exact path='/my-diary'>
                        <MyDiary/>
                    </Route>
                </Switch>
            </div> 
        </>
    )
}

export default App;