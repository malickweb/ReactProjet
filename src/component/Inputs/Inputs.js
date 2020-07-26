import React from 'react';
import styled from '@emotion/styled';

const LABEL = styled.label`
    display: block;
    width: 100%;
    padding: 0 10px;
    input {
        width: 50%;
    }
    .error {
        border: 1px solid red;
    }
    .good {
        border: 1px solid green;
    }
`;

const Input = props => {
    return (
        <LABEL>
            {props.text}
            <input className={props.state ? 'good' : 'error'} type={props.type} name={props.name} placeholder={props.name} onChange={props.handleOnChange} />
        </LABEL>
    );
};

export default Input;
