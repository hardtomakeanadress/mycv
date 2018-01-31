import React from 'react';
import './Project.css';

const Project = (props) => {
    
    return (
        <div className="Project">
            <p>This is project {props.name} and is my No. {props.priority} priority</p>
            <p>This is passed as children: {props.children}</p>
        </div>
    );
};

export default Project;