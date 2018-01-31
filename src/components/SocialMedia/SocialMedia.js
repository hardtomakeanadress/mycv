import React from 'react';
import './SocialMedia.css';

import mailLogo from './img/email.png';
import phoneLogo from './img/phone.png';
import linkedin from './img/linkedin.png';

const SocialMedia = (props) => {
    return(
        <div id='SocialMedia'>
            <div>
                <img  src={phoneLogo} alt="contact me by phone"/>
                <div>+40 728 005 406</div>
            </div>
            <div>
                <img  src={mailLogo} alt="contact me by mail"/>
                <div>adi.stef@gmx.com</div>
            </div>
            <div>
                <img src={linkedin} alt="Check my Linkedin Profile"/>
                <div>My Linkedin Profile</div>
            </div>
        </div>
    );
};

export default SocialMedia;