import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AppShell from './components/AppShell';
import Home from './components/Home';
import Show from './components/Show';
import Confirm from './components/Confirm';
import MediumToday from './components/MediumToday';
import FutureJob from './components/FutureJob';


class App extends React.Component {
    render() {
        return (
            <Router>
                <AppShell>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/futurejob/" component={FutureJob}/>
                        <Route exact path="/mediumtoday/:id" component={MediumToday}/>
                        <Route exact path="/confirm/:id" component={Confirm}/>
                        <Route exact path="/show/:id" component={Show}/>
                        
                    </div>
                </AppShell>
            </Router>
        );
    }
}

export default App;