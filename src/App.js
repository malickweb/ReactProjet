import React, { Component } from 'react';

//Component
import Menu from './component/Header/Menu';
import Welcome from './Welcome';

//Style

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Welcome />
            </div>
        );
    }
}

export default App;
