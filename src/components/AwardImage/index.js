import React from 'react';
import './AwardImage.css';

export default function AwardImage ({src, altText}) {
return <img src={src} alt={altText} className="awardImage"/>
}