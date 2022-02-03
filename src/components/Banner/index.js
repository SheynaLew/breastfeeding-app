import React from 'react';
import './Banner.css'

import Title from '../Titles/index.js';


//Create a Banner function and export as a default
export default function Banner() {
    //return a div which will be the banner and create the title text
    return <div className="banner">
    {/* add the Title component with text props of "BreastBuds" */}
       <Title text = "BreastBuds"/>
    </div>
}