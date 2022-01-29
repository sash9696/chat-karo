
import Button from '@material-ui/core/Button';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from './firebase';
import {signInWithPopup } from "firebase/auth";

function Login() {
    
    

    const signIn = (e) =>{
        e.preventDefault()
        signInWithPopup(auth, provider).catch((error)=> alert(error.message))
    }
  return (
    <LoginContainer>
        <LoginInnerContainer>
            <img src='data:image/png;base64,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' alt=''/>
            <h1>Sign in to Chat-karo</h1>
            <p>chat-karo-link</p>
            <Button onClick={signIn}>Sign In with Google</Button>
        </LoginInnerContainer>
    </LoginContainer>


  );
}

export default Login;

const LoginContainer = styled.div`
    height:100vh;
    display:grid;
    place-items:center;
    /* background-color:#000000; */
    color:white;
    
    

`;
const LoginInnerContainer = styled.div`
    padding:100px;
    text-align:center;
    border-radius:10px;
    box-shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    background-color:#1D2226;
> img{
    height:100px;
    margin-bottom:50px;
    object-fit:contain;
}
> button{
    margin-top: 50px;
    color: white;
    background-color:black;
    text-transform:inherit!important;
}
`;
