import React from 'react';

import Image03 from '../card-bio/thumbnail03.jpeg'
import './card-bio.style.css';

export const CardBio03 = props => (
    <div className='card-bio-container'>
        <a href={ props.biography.url } width="100%" height="300" >
            {/* <img src={ props.biography.img } alt="thumbnail" width="100%" height="100%" /> */}
            <img src={ Image03 } alt="thumbnail" width="100%" height="100%" />
        </a>

        <h2>{ props.biography.name }</h2>      
        <p>{ props.biography.description }</p>
    </div>
);