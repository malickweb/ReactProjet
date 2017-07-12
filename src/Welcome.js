import React, { Component } from 'react';
import './Welcome.css';

//Logo
import logo from './logo.svg';

class Welcome extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    function Welcome(props) {
      return <li>Hello, { props.name }</li>;
    };

    const tabs = ["moi", "moi1", "moi2"];

    const listTab = tabs.map((tab , index) =>
      <Welcome key={ index } name={ tab } />
    );

    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div className="welcome">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <div className="text-center">
                <h1 id="test" className="App-title">Bienvenue sur une App React</h1>
                <img src={ logo } className="App-logo text-center" alt="logo" />
              </div>
            </div>
          </div>
          <div className={ isLoggedIn ? 'hidden' : 'inline-block' }>
            <ul className="test">
              { listTab }
            </ul>
            The user is <b>{ isLoggedIn ? 'currently' : 'not' }</b> logged in.
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
