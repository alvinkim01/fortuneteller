import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AppShell from './components/AppShell';
import Home from './components/Home';
import Texts from './components/Texts';
import Words from './components/Words';
import Show from './components/Show';
import Medium from './components/Medium';
import Confirm from './components/Confirm';


class App extends React.Component {
    render() {
        return (
            <Router>
                <AppShell>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/texts" component={Texts}/>
                        <Route exact path="/words" component={Words}/>
                        <Route exact path="/medium" component={Medium}/>
                        <Route exact path="/confirm" component={Confirm}/>
                        <Route exact path="/show/:id" component={Show}/>
                        
                    </div>
                </AppShell>
            </Router>
        );
    }
}

export default App;