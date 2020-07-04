import { Component } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

//Logo
import logo from '../logo.svg';
import Button from '../component/Buttons/Button';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
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
            <div>
                <div>
                    <div>
                        <div>
                            <div>
                                <h1
                                    css={css`
                                        background-color: hotpink;
                                        text-align: center;
                                    `}
                                >
                                    Bienvenue sur une App React
                                </h1>
                                <Button />
                                <img src={logo} alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div className={isLoggedIn ? 'hidden' : 'inline-block'}>
                        <ul>{listTab}</ul>
                        The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;
