import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './header.style.css';

export const Header = () => (
    <div className='header'>
        <AnchorLink href='#products' offset="100">Products</AnchorLink>
        <AnchorLink href='#biography' offset="100">Biography</AnchorLink>
        <AnchorLink href='#skills' offset="100">Skills</AnchorLink>
        <AnchorLink href='#contact' offset="100">Contact</AnchorLink>
        <AnchorLink href='#aboutme' offset="100">About me</AnchorLink>
    </div>
);