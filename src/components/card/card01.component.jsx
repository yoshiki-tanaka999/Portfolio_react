import React from 'react';
import Image01 from '../card/HelloDiffs_logo_resize.png'

import './card.style.css';

export const Card01 = props => (
    <div className='card-container'>
        <a href={ props.product.url } width="100%" height="300" >
            {/* <img src={ props.biography.img } alt="thumbnail" width="100%" height="100%" /> */}
            <img src={ Image01 } alt="thumbnail" width="100%" height="100%" />
        </a>


        <h2>{ props.product.name }</h2>  
        <h3>{ props.product.language }</h3>       
        <p>{ props.product.description }</p>
    </div>
);