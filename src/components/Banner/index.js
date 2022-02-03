import React from 'react';
import './Banner.css'

import Title from '../Titles';


//Create a Banner function and export as a default
export default function Banner({title}) {
    return (
    <div className="banner">
        <h1>{title}</h1>
    </div>)
}