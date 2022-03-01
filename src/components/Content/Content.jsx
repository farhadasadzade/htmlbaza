import React from 'react'
import { Route, Routes } from 'react-router-dom';
import style from './Content.module.css'

import Home from './Home/Home.jsx'
import HtmlElementPage from './HtmlElementPage/HtmlElementPage.jsx'

const Content = (props) => {

    let routeElements = props.state.elementsData.map( (element, index) => 
                                      <Route 
                                            key={index} 
                                            path={"/" + element.name.replace(/<|>/g, '')} 
                                            element={<HtmlElementPage state={props.state}
                                                                      number={index}/>}/>)

    return (
      <div className={style.content}>
        <div className={style.container}>
          <Routes>
            <Route path="/" element={<Home state={props.state}/>} />
            {routeElements}
          </Routes>
        </div>
      </div>
    );
}

export default Content; 