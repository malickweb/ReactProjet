import React from 'react';
import ReactDOM from 'react-dom';

//Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Component
import App from './App';
import Welcome from './Welcome';
import Movie from './component/Section/Movie/Movie';
import Clock from './component/Section/Clock/Clock';
import Formulaire from './component/Section/Formulaire/Formulaire';
import Show from './component/Section/Show/Show';

import registerServiceWorker from './registerServiceWorker';

//Style
// import './assets/bootstrap/bootstrap.css';
// import './index.scss';
import './index.css';

const Root = () => (
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Welcome" component={Welcome} />
        <Route path="/film" component={Movie} />
        <Route path="/clock" component={Clock} />
        <Route path="/formulaire" component={Formulaire} />
        <Route path="/show" component={Show} />
    </Switch>
);

ReactDOM.render(
    <Router>
        <Root />
    </Router>,
    document.querySelector('body')
);
registerServiceWorker();
