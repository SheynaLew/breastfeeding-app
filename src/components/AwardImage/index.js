import React from 'react';
import './AwardImage.css';

export default function AwardImage ({url, altText}) {
return <img src={url} alt={altText}/>
}