import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css';


export const CardList = props => (
    <div className='card-list'>
        {props.products.map(product => (
            <Card key= {product.id} product={ product }/>
        ))}
    </div>
);




