import React from "react";
import "./BannerTitle.css"

//export a default function called Title which takes in a text prop
export default function BannerTitle ({text}) {
// return an h1 which includes the text prop
return <h1 id="bannerTitle">{text}</h1>
}