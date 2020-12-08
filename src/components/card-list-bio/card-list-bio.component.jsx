// 結果使わない。引数と取得された値がよく分かっていない。
// 加えて、三項演算子の使い方もこれであっているか、調べる。

import React from 'react';
import { CardBio01 } from '../card-bio/card-bio01.component';
import { CardBio02 } from '../card-bio/card-bio02.component';
import { CardBio03 } from '../card-bio/card-bio03.component';
import './card-list-bio.style.css';


export const CardListBio = props => (
    <div className='card-list-bio'>
        {/* {console.log(props.biographies[0])} */}
        <CardBio01 key= {props.biographies[0].id} biography={ props.biographies[0] }/>
        <CardBio02 key= {props.biographies[1].id} biography={ props.biographies[1] }/>               
        <CardBio03 key= {props.biographies[2].id} biography={ props.biographies[2] }/>  
    </div>
);