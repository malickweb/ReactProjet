import React, { Component } from 'react';
//Logo
import logo from './logo.svg';

class Welcome extends Component {
<<<<<<< HEAD
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
    const author = 'Malick Belgrine'

    return (
      <div className="welcome">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <div className="text-center">
                <div className="cache-h1">
                  <h1 id="test" className="App-title">Bienvenue sur une <span>App React</span></h1>
                </div>
                <img src={ logo } className="App-logo text-center" alt="logo" />
                <h2>By { author }</h2>
              </div>
=======
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    render() {
        function Welcome(props) {
            return <li>Hello, {props.name}</li>;
        }

        const tabs = ['moi', 'moi1', 'moi2'];

        const listTab = tabs.map((tab, index) => <Welcome key={index} name={tab} />);

        const isLoggedIn = this.state.isLoggedIn;

        return (
            <div className="welcome">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="text-center">
                                <h1 id="test" className="App-title">
                                    Bienvenue sur une App React
                                </h1>
                                <img src={logo} className="App-logo text-center" alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div className={isLoggedIn ? 'hidden' : 'inline-block'}>
                        <ul className="test">{listTab}</ul>
                        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
                    </div>
                </div>
>>>>>>> menu
            </div>
        );
    }
}

export default Welcome;
