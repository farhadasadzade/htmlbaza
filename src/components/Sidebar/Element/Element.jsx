import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './Element.module.css'

const Element = (props) => {
  return (
      <NavLink className={style.navlink} to={props.name.replace(/<|>/g, "")}>
        <div className={style.element}>
          <h2 className={style["element-name"]}>{props.name}</h2>
          <h4 className={style["element-description"]}>{props.description}</h4>
        </div>
      </NavLink>
    );
}

export default Element; 