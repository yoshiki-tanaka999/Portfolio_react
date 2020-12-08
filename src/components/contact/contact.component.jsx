import React from 'react';
import { RiMessengerFill } from 'react-icons/ri';

import './contact.style.css';


export const Contact = () => (
    <div className='contact'>
        <div className='contact-content'>
            <h1 id='contact'> Contact </h1>
            <p> ご気軽にご連絡下さい。</p> 
            <a href="https://www.facebook.com/messages/t/100010723722268">
                <div className='messengerIcon'>
                    <RiMessengerFill size='60' style={{ fill: 'white' }} />   
                </div>
                <p id='messenger'>Messenger</p>
            </a>
        </div>
    </div>
);