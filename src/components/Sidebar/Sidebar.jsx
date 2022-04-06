import React, {useState} from 'react'
import style from './Sidebar.module.css'

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import Element from './Element/Element.jsx'

const Sidebar = (props) => {

    let elements = props.state.elementsData.map ( (element, index) => <Element key={index} name={element.name} description={element.description}/>)

    const [filteredData, setFilteredData] = useState(elements)
    const [wordEntered, setWordEntered] = useState("");

    const filterData = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = props.state.elementsData.filter((e) => {
            let newName = e.name.replace(/<|>/g, "")
            return newName.startsWith(searchWord.toLowerCase())
        })
        setFilteredData(newFilter.map((element, index) => {
            return <Element key={index} name={element.name} description={element.description}/>
        }))
    }

    return (
        <nav className={style.sidebar}>
            <NavLink className={style.navlink} to="/htmlbaza"><h1 className={style.logo}>htmlbaza</h1></NavLink>
            <h3 className={style["logo-text"]}>müasir HTML əlifbası</h3>
            <div className={style["search-box"]}>
                <input className={style.search} type="text" value={wordEntered} placeholder="axtar:" onChange={filterData}/>
                <button className={style["search-btn"]}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
            <nav className={style.elements}>
                {filteredData}
            </nav>
        </nav>
    )
}

export default Sidebar;