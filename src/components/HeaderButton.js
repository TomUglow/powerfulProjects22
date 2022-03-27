import React from 'react';
import './HeaderButton.css';
import { Link } from 'react-router-dom';

export function HeaderButton() {
    return(
        <Link to='contact-us'>
            <button className='header-btn'>Contact Us</button>
        </Link>
    );
}