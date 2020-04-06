import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import AppShell from './components/AppShell';
import Home from './components/Home';
import Show from './components/Show';
import ShowYear from './components/ShowYear';
import ShowMonth from './components/ShowMonth';
import ShowLove from './components/ShowLove';
import showMoney from './components/ShowMoney';
import ShowBusiness from './components/ShowBusiness';
import Confirm from './components/Confirm';
import ConfirmYear from './components/ConfirmYear';
import ConfirmMonth from './components/ConfirmMonth';
import ConfirmLove from './components/ConfirmLove';
import ConfirmBusiness from './components/ConfirmBusiness';
import confirmMoney from './components/ConfirmMoney';
import MediumToday from './components/MediumToday';
import MediumYear from './components/MediumYear';
import MediumMonth from './components/MediumMonth';
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
                        <Route exact path="/mediumyear/:id" component={MediumYear}/>
                        <Route exact path="/mediummonth/:id" component={MediumMonth}/>
                        <Route exact path="/confirm/:id" component={Confirm}/>
                        <Route exact path="/confirmyear/:id" component={ConfirmYear}/>
                        <Route exact path="/confirmmonth/:id" component={ConfirmMonth}/>
                        <Route exact path="/confirmlove/:id" component={ConfirmLove}/>
                        <Route exact path="/confirmbusiness/:id" component={ConfirmBusiness}/>
                        <Route exact path="/confirmMoney/:id" component={confirmMoney}/>
                        <Route exact path="/show/:id" component={Show}/>
                        <Route exact path="/showyear/:id" component={ShowYear}/>
                        <Route exact path="/showmonth/:id" component={ShowMonth}/>
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