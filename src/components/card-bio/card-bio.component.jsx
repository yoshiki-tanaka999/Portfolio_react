import React from 'react';

import Image01 from '../card-bio/thumbnail01.jpeg'
import './card-bio.style.css';

export const CardBio = props => (
    <div className='card-bio-container'>
        {/* <iframe title="vimeo-player" src="{ props.product.url }" width="100%" height="280" frameBorder="0" allowFullScreen></iframe> */}

        <a href={ props.biography.url } width="100%" height="300" >
            {/* <img src={ props.biography.img } alt="thumbnail" width="100%" height="100%" /> */}
            <img src={ Image01} alt="thumbnail" width="100%" height="100%" />
        </a>

        <h2>{ props.biography.name }</h2>      
        <p>{ props.biography.description }</p>
    </div>
);

