import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header.js'
import styled from 'styled-components';
import Chat from './Chat';
import Sidebar from './Sidebar';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from './firebase.js';
import Login from './Login.js';
import { useDispatch } from 'react-redux';
import { userDetails } from './features/appSlice.js';
import { login } from './features/userSlice';

function App() {

  const [user, loading] = useAuthState(auth);
  const [searchName, setSearchName] = useState("")

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,

        }))
      } 
    })
  
  }, [])

  return (
    
    <div className="app">
      <BrowserRouter>
        {!user ? <Login/> :(
            <>
            <Header searchName={searchName} setSearchName={setSearchName}/>
            <AppBody>
              <Sidebar/>
              <Routes>
                <Route exact path="/" element={<Chat searchName={searchName} setSearchName={setSearchName}/>} />
              </Routes>
              
            </AppBody>
            
          </>
        )}
      
      </BrowserRouter>
    </div>
    
  );
}

export default App;

const AppBody = styled.div`
  display:flex;
  
`;

