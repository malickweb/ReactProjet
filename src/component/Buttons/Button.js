import React from 'react';
import styled from '@emotion/styled';

const DIV = styled.div`
    button {
        display: inline-block;
        padding: 5px 15px;
        border: 1px solid #000;
        background-color: transparent;
        transition: all 0.3s linear;
        cursor: pointer;
        &:hover {
            background-color: #000;
            color: #fff;
            transition: all 0.3s linear;
        }
    }
`;

const Button = props => {
    return (
        <DIV>
            <button onClick={props.handleClick}>{props.text}</button>
        </DIV>
    );
};

export default Button;
