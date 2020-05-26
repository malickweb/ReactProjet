import { Component } from 'react';
//import { css } from '@emotion/core';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

//Logo
import logo from '../logo.svg';
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

        const Button = styled.button`
            background-color: #000;
            color: #fff;
            border-radius: 5px;
        `;

        return (
            <div>
                <div>
                    <div>
                        <div className="col-xs-12">
                            <div className="text-center">
                                <h1
                                    css={css`
                                        background-color: hotpink;
                                        text-align: center;
                                    `}
                                    id="test"
                                >
                                    Bienvenue sur une App React
                                </h1>
                                <Button> CLICK </Button>
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
