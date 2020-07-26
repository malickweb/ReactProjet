import { useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// COMPONENT
import Inputs from '../../Inputs/Inputs';

const Formulaire = () => {
    const [inputValues, setInputValues] = useState({
        name: '',
        firstName: '',
        state: ''
    });

    const handleOnChange = event => {
        const { name, value } = event.target;
        value.match(/aaaaa/g) ? (inputValues.state = true) : (inputValues.state = false);
        setInputValues({ ...inputValues, [name]: value });
        console.log('EEE ===>', inputValues);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit inputValues ===>', inputValues);
    };

    return (
        <div
            css={css`
                width: 980px;
                margin: 0 auto;
                text-align: center;
            `}
        >
            <h1>Formulaire</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <Inputs type="text" state={inputValues.state} text="Nom :" name="name" handleOnChange={handleOnChange} />
                    <Inputs type="text" text="firstName :" name="firstName" handleOnChange={handleOnChange} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Formulaire;
