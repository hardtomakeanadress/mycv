import React from 'react';
import './SocialMedia.css';

import mailLogo from './img/email.png';
import phoneLogo from './img/phone.png';
import linkedin from './img/linkedin.png';

const SocialMedia = (props) => {
    return(
        <div id='SocialMedia'>
            <div className="row">
                <div className="col-sm-4">
                    <img  src={phoneLogo} alt="contact me by phone"/>
                    <span>+40 728 005 406</span>
                </div>
                <div className="col-sm-4">
                    <img  src={mailLogo} alt="contact me by mail"/>
                    <span>adi.stef@gmx.com</span>
                </div>
                <div className="col-sm-4">
                    <a href="https://www.linkedin.com/in/adistef/" 
                       target="_blank"
                       rel="noopener noreferrer">
                        <img src={linkedin} alt="Check my Linkedin Profile"/>
                    </a>
                    <a href="https://www.linkedin.com/in/adistef/" 
                       target="_blank"
                       rel="noopener noreferrer">
                        <span>My Linkedin Profile</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;