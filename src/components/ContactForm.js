import React from 'react';
import './ContactForm.css';
import LocationPin from '..//images/location-pin.png';
import emailjs, { init } from 'emailjs-com';
init("user_kOD2awCiUQTvoAfY4hMUn");

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        name: '',
        email: '',
        description: ''
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
    const btn = document.getElementById('form-submit-button');

    document.getElementById('form')
        .addEventListener('submit', function(event) {
        event.preventDefault();
    
    btn.value = 'Sending...';
    
    const serviceID = 'default_service';
    const templateID = 'template_2s56c7v';
    
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
        btn.value = 'Send Email';
            alert('Sent!');
        }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
        });
    });        
};
    
    render() {
        return (
        <>
            <h1 className='form-heading'>Get In Touch {this.state.username} </h1>
            <h2 className='form-mobile'>Call Ben on 0411 111 111 or fill in the form below</h2>
            <h3 className='form-location'><img className='location-pin' src={LocationPin} alt='Location Pin Icon' width="13" height="20" /> Based in Melbourne</h3>
            
            <form id="form" className="form">
                <label for="name" className="form-name">Enter your name:</label>
                <input type="text" name="name" id="name" className="form-box1"/>

                <label for="email" className="form-email">Enter your email address:</label>
                <input type="text" name="email" id="email" className="form-box2"/>

                <label for="description" className="form-description">How can we help?</label>
                <textarea type="text" name="description" id="description" className="form-box3"/>

                <input type="submit" id="form-submit-button" value="Submit Form" className="form-submit" onClick={this.handleSubmit}/>
            </form>

            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
            <script type="text/javascript"> emailjs.init('user_kOD2awCiUQTvoAfY4hMUn')</script>
        </>
        );
    }
}

  export default ContactForm;