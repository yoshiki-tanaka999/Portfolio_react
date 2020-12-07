import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './header.style.css';

export const Header = () => (
    <div className='header'>
        <AnchorLink href='#products' offset="50">Products</AnchorLink>
        <AnchorLink href='#biography' offset="50">Biography</AnchorLink>
        <AnchorLink href='#skills' offset="50">Skills</AnchorLink>
        <AnchorLink href='#contact' offset="50">Contact</AnchorLink>
        <AnchorLink href='#aboutme' offset="50">About me</AnchorLink>
    </div>
);