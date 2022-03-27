import React from 'react';
import '../../App.css';
import ContactForm from '../ContactForm';
import { Link } from 'react-router-dom';

export default function ContactUs() {
    return(
        <div className='contact-us'>
            <h1 className='contact-us-header'>CONTACT US</h1>
            <div className='contact-form-container'>
                < ContactForm />
            </div>
        </div>
    );
}