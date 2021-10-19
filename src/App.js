import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import SignIn from './components/signIn/SignIn';
import SignOut from './components/SignOut';
import SignUp from './components/signUp/SignUp';


function App() {

    return (
        <>
            <NavLink to='/sign-in' className='main_link'>Sign in</NavLink>
            <NavLink to='/sign-up' className='main_link'>Sign up</NavLink>
            <NavLink to='/sign-out' className='main_link'>Sign out</NavLink>
            {/* <Header>er</Header> */}
            <div id="content">
                <Switch>
                    <Route exact path='/sign-in'>
                        <SignIn/>
                    </Route>
                    <Route exact path='/sign-up'>
                        <SignUp/>
                    </Route>
                    <Route exact path='/sign-out'>
                        <SignOut/>
                    </Route>
                </Switch>
            </div> 
        </>
    )
}

export default App;