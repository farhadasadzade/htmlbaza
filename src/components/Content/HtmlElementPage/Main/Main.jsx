import React from "react";
import style from './Main.module.css'

const Main = (props) => {

    var parse = require('html-react-parser');

    return (
        <div className={style.content}>
            <div className={style.about}>
                <h1 className={style.title}>
                    <span>Tag:</span> {props.state.elementsData[props.number].name.replace(/<|>/g, '')}
                </h1>
                <p className={style.text}>
                    {props.state.elementAbout[props.number].about}
                </p>
                <pre className={style.code}>
                    {props.state.elementAbout[props.number].codeText}
                </pre>
                <button className={style.btn}>Copy!</button>
            </div>
            <div className={style.final}>
                <h2 className={style['final-title']}>Nəticə</h2>
                <div className={style['final-text']}>
                    {parse(props.state.elementAbout[props.number].codeText)}
                </div>
            </div>
        </div>
    )
}

export default Main;