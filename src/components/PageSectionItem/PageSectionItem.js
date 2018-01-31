import React from 'react';
import './PageSectionItem.css';

const PageSectionItem = (props) => {
    return (
        <div className="PageSectionItem">
            <p>{props.data}</p>
        </div>
    );
};

export default PageSectionItem;