import React from "react";

import "./Button.css"

//export a default function called Button
    //take in props of handleClick and text
export default function Button ({handleClick, text}) {
    return <button className="myButton" onClick={handleClick}>{text}</button>
}