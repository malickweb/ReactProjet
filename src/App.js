//import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//             </header>
//         </div>
//     );
// }

// export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Component
import Menu from './component/Header/Menu';
import Welcome from './Welcome';
import Movie from './component/Section/Movie/Movie';
import Clock from './component/Section/Clock/Clock';
import Formulaire from './component/Section/Formulaire/Formulaire';
import Show from './component/Section/Show/Show';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <Switch>
                        <Route path="/film">
                            <Movie />
                        </Route>
                        <Route path="/clock">
                            <Clock />
                        </Route>
                        <Route path="/formulaire">
                            <Formulaire />
                        </Route>
                        <Route path="/show">
                            <Show />
                        </Route>
                        <Route exact path="/">
                            <Welcome />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
