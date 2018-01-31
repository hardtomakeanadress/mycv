import React from 'react';
import './ContactPage.css';
import Header from '../components/Header/Header';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import ContactForm from '../components/ContactForm/ContactForm';

const ContactPage = (props) => {
    return(
        <div id="ContactPage">
            <Header />
            <div className="container">
                <div className="PageSection">
                    <SocialMedia />
                </div>
                <div className="PageSection">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactPage;