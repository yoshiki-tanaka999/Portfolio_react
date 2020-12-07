import React from 'react';
import { CardBio } from '../card-bio/card-bio.component';
import './card-list-bio.style.css';


export const CardListBio = props => (
    <div className='card-list-bio'>
        {props.biographies.map(biography => (
            <CardBio key= {biography.id} biography={ biography }/>
        ))}
    </div>
);