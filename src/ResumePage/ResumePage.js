import React, { Component } from 'react';
import './ResumePage.css';
import Header from '../components/Header/Header';
import PageSection from '../components/PageSection/PageSection';

class ResumePage extends Component {
    
    cvData = [
        {sectionName:'Professional Experiences',
        sectionContent: ['Progress OpenEdge developer, Yonder', ' Internship Progress OpenEdge - Yonder']
        },
        {sectionName:'Education',
        sectionContent: ['Front-end Web Development, The Informal School of IT ',
                         'Mobile applications programming course, Graduation Certificate issued by ANC',
                         'Babes-Bolyai University Faculty of Political, Administrative and Communication  Sciences',
                         'Mihai Eminescu high school']
        },
        {sectionName:'Skills',
        sectionContent: ['JavaScript, jQuery, React, HTML, CSS',
                         'Progress OpenEdge',
                         'C++',
                         'Product Development - Scrum',
                         'Graphic Design - Adobe Photoshop, Adobe Lightroom']
        },
        {sectionName:'Interests',
        sectionContent: ['RaspberryPi, Arduino',
                         'Solar powered projects',
                         'Blockchain Technology',
                         '3D Printing',
                         'Photography']
        }
    ];
    
    render() { return (
        <div id="ResumePage">
            <Header />
                <div className="container">
                    {this.cvData.map( (data) => {
                        return (
                            <PageSection data = {data} />
                        );
                    })}
                </div>
        </div>
    )}
}

export default ResumePage;
