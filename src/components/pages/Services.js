import React from 'react';
import '../../App.css';

export default function Services() {
    return(
        <>
        <div className='services'>
            <div className='services-image'>SERVICES</div>
            <div className='services-box-domestic'>
                <h1 className='services-box-heading'>DOMESTIC</h1><br></br>
                <p className='services-box-text'>
                    We cover all aspects of your electrical, data &amp; security needs in your home.
                    Protect your family today and swap that old switchboard for new RCDs.
                    Save the planet (and your energy bill) by replacing your old light fittings with efficient LED fittings.
                    Or does your house need a complete re-wire?
                    We excel in fault finding, service &amp; maintenance; whatever the job, we have all the tools and experience to deliver a first class finish.</p>
            </div>
        </div>
        </>
    );
}