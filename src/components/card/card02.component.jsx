import React from 'react';

import './card.style.css';

export const Card02 = props => (
    <div className='card-container'>
        <iframe title="vimeo-player" src={ props.product.url } width="100%" height="300" allowFullScreen></iframe>
        <h2>{ props.product.name }</h2>
        <h3>{ props.product.language }</h3>        
        <p>{ props.product.description }</p>
    </div>
);

