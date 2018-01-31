import React from 'react';
import './NavMenu.css';
import {Link} from 'react-router-dom';

const NavMenu = (props) => {

    return(
        <div id="NavMenu">
        <div className="container">
            <Link to="/" className="text-info">Home</Link>
            <Link to="/resume" className="text-info">Resume</Link>
            <Link to="/projects" className="text-info">Projects</Link>
            <Link to="/contact" className="text-info">Contact</Link>
            </div>
        </div>
    );
};

export default NavMenu;