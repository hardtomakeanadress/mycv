import React from 'react';
import './PageMenu.css';
import {Link} from 'react-router-dom';

const PageMenu = (props) => {

    return(
        <div id="PageMenu">
            <div className="row align-items-center">
                <Link to="/resume" className="text-info"><button type="button" className="btn btn-outline-info">My Resume</button></Link>
                <Link to="/projects" className="text-info"><button type="button" className="btn btn-outline-info">Projects</button></Link>
                <Link to="/resume" className="text-info"><button type="button" className="btn btn-outline-info">Skills</button></Link>
            </div>
        </div>
    );
};

export default PageMenu;