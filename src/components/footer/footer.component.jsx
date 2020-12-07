import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './footer.style.css';

export const Footer = () => (
    <div className='footer'>
        <div className='footer-content'>
            <AnchorLink href='#products' offset="100">Products</AnchorLink>
            <AnchorLink href='#biography' offset="100">Biography</AnchorLink>
            <AnchorLink href='#skills' offset="100">Skills</AnchorLink>
            <AnchorLink href='#contact' offset="100">Contact</AnchorLink>
            <AnchorLink href='#aboutme' offset="100">About me</AnchorLink>
        </div>
    </div>
    
);