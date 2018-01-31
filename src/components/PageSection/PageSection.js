import React from 'react';
import './PageSection.css';
import PageSectionItem from '../PageSectionItem/PageSectionItem';

const PageSection = (props) => {
    
    return (
        <div className="PageSection">
            <div className="container">
                <h1>{props.data.sectionName}</h1>
                {props.data.sectionContent.map((data) => {
                    return (
                        <PageSectionItem data = {data} />
                        );
                    })}                    
            </div>
        </div>
    );
};

export default PageSection;