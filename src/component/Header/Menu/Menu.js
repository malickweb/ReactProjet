import React from 'react';
import styled from '@emotion/styled';
import SubMenu from './BtnMenu';

const Nav = styled.nav`
    display: inline-block;
    width: 100%;
    background-color: #000;
    div {
        width: calc(100% - 70px);
        margin: 0 0 0 70px;
    }
    ul {
        display: block;
        margin: 0;
        padding: 0;
        z-index: 5;
    }
`;

const Menu = () => {
    return (
        <Nav>
            <div>
                <ul>
                    <SubMenu />
                </ul>
            </div>
        </Nav>
    );
};

export default Menu;
