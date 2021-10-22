import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
// import Header from './components/header/Header';
import SignIn from './components/signIn/SignIn';
import SignOut from './components/SignOut';
import SignUp from './components/signUp/SignUp';
import MyDiary from './components/myDiary/MyDiary';
import NewPost from './components/newPost/NewPost';
import ViewPost from './components/viewPost/ViewPost';

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
                    <Route exact path='/new-post'>
                        <NewPost/>
                    </Route>
                    <Route exact path='/view-post'>
                        <ViewPost/>
                    </Route>
                </Switch>
            </div> 
        </>
    )
}

export default App;