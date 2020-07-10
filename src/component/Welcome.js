import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

//Component
import Button from '../component/Buttons/Button';
import Survey from '../component/Survey/Survey';

//Logo
import logo from '../logo.svg';

import styled from '@emotion/styled';

const Welcome = () => {
    const [isLoggedIn, setLogged] = useState(false);

    const handleClick = () => {
        console.log('click');
        setLogged(!isLoggedIn);
    };

    const CONTAINER = styled.div`
        width: 980px;
        margin: 0 auto;
        text-align: center;
    `;
    const CONTAINER_IMAGE = styled.div`
        width: 500px;
        margin: 0 auto;
    `;

    return (
        <CONTAINER>
            <div>
                <h1>Bienvenue sur une App React</h1>
                <CONTAINER_IMAGE>
                    <img src={logo} alt="logo" />
                </CONTAINER_IMAGE>
            </div>
            <div className={isLoggedIn ? 'hidden' : 'inline-block'}>
                The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
                {isLoggedIn ? <Redirect to="/film" /> : console.log('ijio')}
            </div>
            <Button handleClick={handleClick} text="Button" />
            <Survey />
        </CONTAINER>
    );
};

export default Welcome;
