import React from 'react';
import './HomePage.css';
import Header from '../components/Header/Header';
import PageMenu from '../components/PageMenu/PageMenu';
import pictureOfMe from './img/pictureOfMe.jpg';

const HomePage = (props) => {
    return(
    <div id="HomePage">
        <Header />
        
        <div class="container">
            <div class="PageSection">
                <div className="col-md-6">
                    <img className='pictureofme' src={pictureOfMe} alt='mypicture'/>
                    <h1 className="display-3">Hello,</h1>
                    <p className="lead">a bit about me:</p>
                    <p className="lead">
                        I am 35 years old and I've been working as 
                        a developer for a year and a half. I like to play with microcontrollers and I`m a 
                        big fan of DIY projects. I also love Raspberry Pi !
                    </p>
                </div>
                <div className="col-md-6">
                    <PageMenu />
                </div>
            </div>
        </div>
    </div>
    );
};

export default HomePage;