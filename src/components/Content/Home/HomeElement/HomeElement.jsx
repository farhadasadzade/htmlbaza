import React from "react";
import { NavLink } from "react-router-dom";
import style from './HomeElement.module.css'

const HomeElement = (props) => {
    return (
        <NavLink className={style.navlink} to={props.name.replace(/<|>/g, '')}>
            <div className={style["element-box"]}>
                <h2 className={style.title}>{props.name}</h2>
                <p className={style.description}>{props.description}</p>
            </div>
        </NavLink>
    )
}

export default HomeElement;