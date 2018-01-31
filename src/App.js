import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ResumePage from './ResumePage/ResumePage';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import ContactPage from './ContactPage/ContactPage';

class App extends Component {
  // state = {
  //   projects: 
  //   [
  //     {name:'Metal Detector',
  //       priority:2
  //     },
  //     {name:'Learn React',
  //       priority:1
  //     },
  //     {name:'Have fun',
  //       priority:3
  //     }
  //   ]
  // };
  
  // buttonClickHandler = () => {
    
  //   this.setState({
  //     projects:
  //       [
  //     {name:'Metal Detector',
  //      priority: 5
  //     },
  //     {name:'Learn React',
  //      priority:1
  //     },
  //     {name:'Have fun',
  //      priority:3
  //     }
  //   ]      
  //   });
  // }
  
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route path='/resume' component={ResumePage} />
          <Route path='/projects' component={ProjectsPage} />
          <Route path='/contact' component={ContactPage} />
        </div>
      </Router>
    );
  }
}

export default App;

//  <Project name = {this.state.projects[0].name}
//               priority = {this.state.projects[0].priority} />
//       <Project name = {this.state.projects[1].name} 
//               priority = {this.state.projects[1].priority}/>
//       <Project name = {this.state.projects[2].name}
//               priority = {this.state.projects[2].priority}>Between tags</Project>