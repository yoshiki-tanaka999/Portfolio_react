import React from 'react';
import { Card } from '../card/card01.component';
import { Card01 } from '../card/card01.component';
import { Card02 } from '../card/card02.component';
import { Card03 } from '../card/card03.component';
import './card-list.style.css';


// export const CardList = props => (
//     <div className='card-list'>
//         {props.products.map(product => (
//             <Card key= {product.id} product={ product }/>
//         ))}
//     </div>
// );

export const CardList = props => (
    <div className='card-list'>
        {/* {console.log(props.biographies[0])} */}
        <Card01 key= {props.products[0].id} product={ props.products[0] }/>
        <Card02 key= {props.products[1].id} product={ props.products[1] }/>               
        <Card03 key= {props.products[2].id} product={ props.products[2] }/>  
    </div>
);



