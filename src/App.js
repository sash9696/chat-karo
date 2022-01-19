import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header.js'
import styled from 'styled-components';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    
    <div className="app">
      <BrowserRouter>
      <>
        <Header/>
        <AppBody>
          <Sidebar/>
          <Routes>
            <Route exact path="/" element={<Chat/>} />
          </Routes>
        </AppBody>
        
      </>
      </BrowserRouter>
    </div>
    
  );
}

export default App;

const AppBody = styled.div`
  display:flex;
`;

