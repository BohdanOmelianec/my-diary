import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
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