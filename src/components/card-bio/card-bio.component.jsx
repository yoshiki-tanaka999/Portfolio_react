import React from 'react';

import './card-bio.style.css';

export const CardBio = props => (
    <div className='card-bio-container'>
        {/* <iframe title="vimeo-player" src="{ props.product.url }" width="100%" height="280" frameBorder="0" allowFullScreen></iframe> */}
        <iframe title="vimeo-player" src={ props.biography.url } width="100%" height="300" frameBorder="0" allowFullScreen></iframe>
        <h2>{ props.biography.name }</h2>      
        <p>{ props.biography.description }</p>
    </div>
);

