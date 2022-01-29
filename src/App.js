import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header.js'
import styled from 'styled-components';
import Chat from './Chat';
import Sidebar from './Sidebar';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from './firebase.js';
import Login from './Login.js';

function App() {

  const [user, loading] = useAuthState(auth);
  return (
    
    <div className="app">
      <BrowserRouter>
        {!user ? <Login/> :(
            <>
            <Header/>
            <AppBody>
              <Sidebar/>
              <Routes>
                <Route exact path="/" element={<Chat/>} />
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

