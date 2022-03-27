import React from 'react';
import './Footer.css';
import blackLogo from '../images/final logo_black_no background.png';
import InstagramLogo from '../images/instagram-logo-black-transparent.jpg';

function Footer() {
    return(
        <div className='footer'>
            <img src={blackLogo} alt='logo' className='footer-logo' />
            <a href='https://www.instagram.com/powerful.projects/' target="_blank" rel="noreferrer">
                <img className='instagram-logo' src={InstagramLogo} alt='Instagram logo' width="50" height="38" ></img>
            </a>
        </div>
    )
};

export default Footer;