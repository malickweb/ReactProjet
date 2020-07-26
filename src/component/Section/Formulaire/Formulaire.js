import { useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

// COMPONENT
import Inputs from '../../Inputs/Inputs';

const Formulaire = () => {
    const [inputValues, setInputValues] = useState({
        name: {
            text: 'Nom',
            value: '',
            state: ''
        },
        firstName: {
            text: 'Prenom',
            value: '',
            state: ''
        }
    });

    const handleOnChange = event => {
        const { name, value } = event.target;
        const valid = validateValue(value);
        console.log('[name]', [name]);
        setInputValues({
            ...inputValues,
            [name]: {
                ...inputValues.name,
                value: value,
                state: valid
            }
        });
        // console.log('A ===> ', valid);
        console.log('EEE ===>', inputValues);
    };

    const validateValue = value => {
        return /azerty/.test(value);
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
                    <Inputs type="text" state={inputValues.name.state} text="Nom :" name="name" handleOnChange={handleOnChange} />
                    <Inputs type="text" state={inputValues.firstName.state} text="firstName :" name="firstName" handleOnChange={handleOnChange} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Formulaire;
