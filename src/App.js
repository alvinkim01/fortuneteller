import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AppShell from './components/AppShell';
import Home from './components/Home';
import Show from './components/Show';
import Confirm from './components/Confirm';
import ShowLove from './components/ShowLove';
import ConfirmLove from './components/ConfirmLove';
import ShowBusiness from './components/ShowBusiness';
import ConfirmBusiness from './components/ConfirmBusiness';
import confirmMoney from './components/ConfirmMoney';
import showMoney from './components/ShowMoney';
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
                        <Route exact path="/confirmlove/:id" component={ConfirmLove}/>
                        <Route exact path="/confirmbusiness/:id" component={ConfirmBusiness}/>
                        <Route exact path="/confirmMoney/:id" component={confirmMoney}/>
                        <Route exact path="/show/:id" component={Show}/>
                        <Route exact path="/showlove/:id" component={ShowLove}/>
                        <Route exact path="/showbusiness/:id" component={ShowBusiness}/>
                        <Route exact path="/showmoney/:id" component={showMoney}/>
                    </div>
                </AppShell>
            </Router>
        );
    }
}

export default App;