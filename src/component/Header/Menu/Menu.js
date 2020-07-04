import React from 'react';
import styled from '@emotion/styled';

// Component
import SubMenu from './BtnMenu';
import Logo from '../Title/Logo';

const HEADER = styled.div`
    width: 100%;
    background-color: #000;

    nav {
        display: inline-block;
        ul {
            display: block;
            margin: 0;
            padding: 0;
            z-index: 5;
        }
    }
`;

const Menu = () => {
    return (
        <HEADER>
            <Logo />
            <nav>
                <div>
                    <ul>
                        <SubMenu />
                    </ul>
                </div>
            </nav>
        </HEADER>
    );
};

export default Menu;
