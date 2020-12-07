import React from 'react';

import Image from './yoshiki.jpeg'
import './about-me.style.css';

export const AboutMe = () => (
    <div className='about-me'>

        <img className='about-me-img' src={ Image } alt='my-profile-img'></img>

        <div className='about-me-content'>
            <h2>田中喜規 Yoshiki Tanaka</h2>
            <p>東京在住。1994年生まれ。</p>

            <h3>社会人生活約３年の総括：”トラブルに愛された人生”</h3>
            <p># 一橋大学商学部商学科卒業後→当時8名の株式会社MEJに入社。</p>
            <p># しかし、組織崩壊し、社会人1年目の12月で退社。</p>
            <p># 社会人２年目。巻き込み事故で、塾の校舎長に就任。</p>
            <p># 在任8ヶ月間で、営業成績全国約300校舎中1位を獲得。</p>       
            <p># 社会人3年目。G's ACADEMYでプログラミングを学ぶ。</p>
            <p># 巻き込まれるのではなく、”巻き込む”人生を送りたい。</p>            
        </div>

    </div>
);