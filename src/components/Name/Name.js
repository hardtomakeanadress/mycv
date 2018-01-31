import React from 'react';
import './Name.css';

const Name = (props) => {

    return(
        <div className="container">
            <h1 className="display-3">{props.myName}</h1>
            <p className="lead">{props.quote}</p>
        </div>
    );
};

export default Name;