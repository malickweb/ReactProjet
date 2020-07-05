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
    // const [isHandleClick, setIsHandleon] = useState(false);
    // const [isToggleOn, setIsToggleOn] = useState(false);
    // const handleClick = () => {
    //     setIsHandleon(!isHandleClick);
    //     setIsToggleOn(!isToggleOn);
    //     console.log('frf');
    // };
    console.log('props', props);
    return (
        <DIV>
            {/* <button onClick={handleClick}>{isToggleOn ? 'ON' : 'OFF'}</button> */}
            <button onClick={props.handleClick}>{props.text}</button>
        </DIV>
    );
};

export default Button;
