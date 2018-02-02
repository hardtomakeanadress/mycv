import React from 'react';
import './SocialMedia.css';

import mailLogo from './img/email.png';
import phoneLogo from './img/phone.png';
import linkedin from './img/linkedin.png';
import github from './img/github.png';

const SocialMedia = (props) => {
    return(
        <div id='SocialMedia'>
            <div className="row">
                <div className="col-sm-6">
                    <img  src={phoneLogo} alt="contact me by phone"/>
                    <div>+40728005406</div>
                </div>
                <div className="col-sm-6">
                    <img  src={mailLogo} alt="contact me by mail"/>
                    <div>adi.stef@gmx.com</div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <a href="https://www.linkedin.com/in/adistef/" 
                       target="_blank"
                       rel="noopener noreferrer">
                        <img src={linkedin} alt="Check my Linkedin Profile"/>
                    </a>
                    <a href="https://www.linkedin.com/in/adistef/" 
                       target="_blank"
                       rel="noopener noreferrer">
                        <div>My Linkedin</div>
                    </a>
                </div>
                <div className="col-sm-6">
                    <a href="https://github.com/hardtomakeanadress" 
                       target="_blank"
                       rel="noopener noreferrer">
                        <img src={github} alt="Check my GitHub"/>
                    </a>
                    <a href="https://github.com/hardtomakeanadress" 
                       target="_blank"
                       rel="noopener noreferrer">
                        <div>My GitHub</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;