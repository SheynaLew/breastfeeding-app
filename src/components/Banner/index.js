import React from 'react';
import './Banner.css'


//Create a Banner function and export as a default
export default function Banner({title}) {
    return (
    <div className="banner">
        {title} 
    </div>)
}