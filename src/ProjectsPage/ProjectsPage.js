import React, { Component } from 'react';
import './ProjectsPage.css';
import Header from '../components/Header/Header';
import PageSection from '../components/PageSection/PageSection';

class ProjectsPage extends Component {
    
    cvData = [
        {sectionName:'SmartHome',
        sectionContent: [`Web app hosted on Raspberry Pi zero with NodeJs 
                        backend and JavaScript, Ejs, HTML frontend. The app gets 
                        environmental data from sensors, validates, saves, 
                        then presents a nice webpage for easy user interaction .`]
        },
        {sectionName:'ScrumPoker',
        sectionContent: ['Android app made with MIT AppInventor']
        },
        {sectionName:'Bluetooth Temperature logger',
        sectionContent: [`Arduino based temperature sensor with Bluetooth 
                        monitoring capabilities`]
        },
        {sectionName:'Low power torrent-box server',
        sectionContent: [`As the server will run around the clock, it is built
                        around a low power CPU (TDP 25W), the Sempron™ 3850 APU
                        with Radeon™ R3 Series, 4 GB of Ram  and a 2 TB hard-disk.
                        Ubuntu Server 16.04.2 LTS was the preferred operating system.`]
        }
    ];
    
    render() { return (
        <div id="ProjectsPage">
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

export default ProjectsPage;
