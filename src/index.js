import React from 'react';
import ReactDOM from 'react-dom';

//Router
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Component
import App from './App';
// import Welcome from './Welcome';
// import Movie from './component/Section/Movie/Movie';
// import Clock from './component/Section/Clock/Clock';
// import Formulaire from './component/Section/Formulaire/Formulaire';
// import Show from './component/Section/Show/Show';

import registerServiceWorker from './registerServiceWorker';

//Style
import './index.css';

ReactDOM.render(<App />, document.querySelector('#root'));
registerServiceWorker();
