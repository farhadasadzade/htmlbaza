import React from "react";
import style from './Home.module.css'

import HomeElement from "./HomeElement/HomeElement.jsx";

const Home = (props) => {

    let homeElements = props.state.elementsData.map( (element, index) => <HomeElement key={index} name={element.name} description={element.description}/>)

    return (
        <div className={style.content}>
            <h1 className={style.title}>HTMLBAZA - müasir HTML və CSS əlifbası</h1>
            <p className={style.text}>HTML və CSS öyrənməyə başlayanlara. Burada bütün HTML etiketlərinin və atributlarının təsviri, CSS xüsusiyyətləri və dəyərlərinin təsviri, bir çox kod nümunəsi, həmçinin effektiv təlim üçün tapşırıqlar tapa bilərsiniz.</p>
            <h2 className={style.subtitle}><span>HTML</span> etiketləri</h2>
            <h2 className={style['elements-title']}>A</h2>
            <div className={style.elements}>
                {homeElements.slice(0, 7)}
            </div>
            <h2 className={style['elements-title']}>B</h2>
            <div className={style.elements}>
                {homeElements.slice(7, 13)}
            </div>
            <h2 className={style['elements-title']}>C</h2>
            <div className={style.elements}>
                {homeElements.slice(13, 19)}
            </div>
            <h2 className={style['elements-title']}>D</h2>
            <div className={style.elements}>
                {homeElements.slice(19, 27)}
            </div>
            <h2 className={style['elements-title']}>E</h2>
            <div className={style.elements}>
                {homeElements.slice(27, 29)}
            </div>
            <h2 className={style['elements-title']}>F</h2>
            <div className={style.elements}>
                {homeElements.slice(29, 34)}
            </div>
            <h2 className={style['elements-title']}>H</h2>
            <div className={style.elements}>
                {homeElements.slice(34, 44)}
            </div>
            <h2 className={style['elements-title']}>I</h2>
            <div className={style.elements}>
                {homeElements.slice(44, 49)}
            </div>
            <h2 className={style['elements-title']}>K</h2>
            <div className={style.elements}>
                {homeElements.slice(49, 50)}
            </div>
            <h2 className={style['elements-title']}>L</h2>
            <div className={style.elements}>
                {homeElements.slice(50, 54)}
            </div>
            <h2 className={style['elements-title']}>M</h2>
            <div className={style.elements}>
                {homeElements.slice(54, 59)}
            </div>
            <h2 className={style['elements-title']}>N</h2>
            <div className={style.elements}>
                {homeElements.slice(59, 61)}
            </div>
            <h2 className={style['elements-title']}>O</h2>
            <div className={style.elements}>
                {homeElements.slice(61, 64)}
            </div>
            <h2 className={style['elements-title']}>P</h2>
            <div className={style.elements}>
                {homeElements.slice(64, 68)}
            </div>
            <h2 className={style['elements-title']}>Q</h2>
            <div className={style.elements}>
                {homeElements.slice(68, 69)}
            </div>
            <h2 className={style['elements-title']}>S</h2>
            <div className={style.elements}>
                {homeElements.slice(69, 83)}
            </div>
            <h2 className={style['elements-title']}>T</h2>
            <div className={style.elements}>
                {homeElements.slice(83, 94)}
            </div>
            <h2 className={style['elements-title']}>U</h2>
            <div className={style.elements}>
                {homeElements.slice(94, 97)}
            </div>
            <h2 className={style['elements-title']}>V</h2>
            <div className={style.elements}>
                {homeElements.slice(97, 99)}
            </div>
            <h2 className={style['elements-title']}>W</h2>
            <div className={style.elements}>
                {homeElements.slice(99, 100)}
            </div>
        </div>
    )
}

export default Home;