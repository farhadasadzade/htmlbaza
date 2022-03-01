import React from "react";
import Main from './Main/Main.jsx'

const HtmlElementPage = (props) => {
    return (
        <div>
            <Main state={props.state} number={props.number}/>
        </div>
    )
}

export default HtmlElementPage;