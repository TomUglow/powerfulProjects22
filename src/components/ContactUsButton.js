import React from 'react';
import './ContactUsButton.css';
import { Link } from 'react-router-dom';

export function ContactUsButton() {
    return(
        <Link to='contact-us'>
            <button className='contact-us-btn'>Contact Us</button>
        </Link>
    );
}