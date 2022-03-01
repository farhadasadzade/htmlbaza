import React from 'react'
import './App.css';

import Header from './components/Header/Header.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Content from './components/Content/Content.jsx'
import { BrowserRouter } from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidebar state={props.state}/>
        <Content state={props.state}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
