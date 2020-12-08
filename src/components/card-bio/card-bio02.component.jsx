import React from 'react';

import Image02 from '../card-bio/thumbnail02.jpeg'
import './card-bio.style.css';

export const CardBio02 = props => (
    <div className='card-bio-container'>
        <a href={ props.biography.url } width="100%" height="300" >
            {/* <img src={ props.biography.img } alt="thumbnail" width="100%" height="100%" /> */}
            <img src={ Image02 } alt="thumbnail" width="100%" height="100%" />
        </a>

        <h2>{ props.biography.name }</h2>      
        <p>{ props.biography.description }</p>
    </div>
);