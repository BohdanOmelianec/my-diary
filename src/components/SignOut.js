import React, { useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';


const Wrapper = styled.div`
    width: 430px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #121212;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
`;

const LogoBox = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #f48fb2;
    margin-top: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Header = styled.p`
    font-size: 18px;
    margin: 10px;
    letter-spacing: 1px;
`;

const Img = styled.img`
    width: 50%;
    height: 50%;
`;

const SubmitInput = styled.input`
    padding: 10px;
    margin: 20px;
    width: 75%;
    background-color: ${props => props.disabled ? 'grey' : '#90caf9'};
    border: none;
    outline: none;
    border-radius: 3px;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 600;
    color: #121212;
    cursor: pointer;
`;

export default function SignOut(props) {
    const [redirect, setRedirect] = useState(false);

    if(redirect) {
        return <Redirect to='/sign-in' />
    }

    return(
        <Wrapper>
            <LogoBox><Img src='https://image.flaticon.com/icons/png/512/565/565547.png' alt="logo"></Img></LogoBox>
            <Header>Sign out</Header>
            <SubmitInput 
                type='submit' 
                value='Sign Out' 
                onClick={() => {
                    setRedirect(true);
                    localStorage.setItem('status', false);
                    props.listener();
                }}/>
               
        </Wrapper>
    )
}