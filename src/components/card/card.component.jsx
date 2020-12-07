import React from 'react';

import './card.style.css';

export const Card = props => (
    <div className='card-container'>
        {/* <iframe title="vimeo-player" src="{ props.product.url }" width="100%" height="280" frameBorder="0" allowFullScreen></iframe> */}
        <iframe title="vimeo-player" src={ props.product.url } width="100%" height="300" frameBorder="0" allowFullScreen></iframe>
        <h2>{ props.product.name }</h2>
        <h3>{ props.product.language }</h3>        
        <p>{ props.product.description }</p>
    </div>
);

