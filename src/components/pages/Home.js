import React from 'react';
import '../../App.css';
import Slider from '../Slider';
import { ContactUsButton } from '../ContactUsButton';
import logo from '../../images/white_no background.png';

export default function Home() {
    return(
        <div className='homepage-container'>
            <div className='home'>
                <img src={logo} alt="Logo" className='homepage-logo'/>
                <div className='homepage-button'>
                    <ContactUsButton/>
                </div>
            </div>
            <div>
                <Slider className='homepage-slider'/>
            </div>
        </div>
    );
}