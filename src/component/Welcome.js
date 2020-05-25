import React, { Component } from 'react';
import { css } from '@emotion/core';

//Logo
import logo from './logo.svg';
class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        };
    }

    render() {
        const color = 'white';
        function Welcome(props) {
            return (
                <li
                    className={css`
                        padding: 32px;
                        background-color: hotpink;
                        font-size: 24px;
                        border-radius: 4px;
                        &:hover {
                            color: ${color};
                        }
                    `}
                >
                    Hello, {props.name}
                </li>
            );
        }
        console.log('css', css);

        const tabs = ['moi', 'moi1', 'moi2'];

        const listTab = tabs.map((tab, index) => <Welcome key={index} name={tab} />);

        const isLoggedIn = this.state.isLoggedIn;

        return (
            <div>
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
            </div>
        );
    }
}

export default Welcome;