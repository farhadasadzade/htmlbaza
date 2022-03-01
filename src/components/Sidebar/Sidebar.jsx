import React from 'react'
import style from './Sidebar.module.css'

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import Element from './Element/Element.jsx'

const Sidebar = (props) => {

    let elements = props.state.elementsData.map ( (element, index) => <Element key={index} name={element.name} description={element.description}/>)

    return (
        <nav className={style.sidebar}>
            <NavLink className={style.navlink} to="/"><h1 className={style.logo}>htmlbaza</h1></NavLink>
            <h3 className={style["logo-text"]}>müasir HTML əlifbası</h3>
            <div className={style["search-box"]}>
                <input className={style.search} type="text" placeholder="axtar:"/>
                <button className={style["search-btn"]}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
            <nav className={style.elements}>
                {elements}
            </nav>
        </nav>
    )
}

export default Sidebar;