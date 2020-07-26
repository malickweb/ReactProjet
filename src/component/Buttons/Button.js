import React from 'react';
import styled from '@emotion/styled';

const LABEL = styled.label`
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
        <LABEL>
            <button onClick={props.handleClick}>{props.text}</button>
        </LABEL>
    );
};

export default Button;
