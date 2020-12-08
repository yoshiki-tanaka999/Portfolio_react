import React from 'react';
import Image03 from '../card/ann.png'

import './card.style.css';

export const Card03 = props => (
    <div className='card-container'>
        <a href={ props.product.url } width="100%" height="300" >
            {/* <img src={ props.biography.img } alt="thumbnail" width="100%" height="100%" /> */}
            <img src={ Image03 } alt="thumbnail" width="100%" height="100%" />
        </a>

        <h2>{ props.product.name }</h2>  
        <h3>{ props.product.language }</h3>       
        <p>{ props.product.description }</p>
    </div>
);

