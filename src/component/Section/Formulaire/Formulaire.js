import React, { useState } from 'react';
import styled from '@emotion/styled';

// Styles
//import './Formulaire.css';

const Formulaire = () => {
    const [inputValues, setInputValues] = useState({
        name: 'Nom',
        firstName: 'Prénom',
        text: 'Texte ici'
    });

    const Form = styled.section`
        max-width: 800px;
        margin: 25px auto 0;
        padding: 10px 15px;
        h1 {
            text-align: center;
        }
        form {
            div {
                margin: 10px 0;
            }
            label {
                display: inline-block;
                min-width: 200px;
                vertical-align: top;
            }
            input,
            textarea {
                width: calc(100% - 230px);
                padding: 5px 10px;
            }
            button {
                display: block;
                margin: 0 auto;
            }
        }
    `;

    const handleOnChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
        console.log('EEE ===>', inputValues);
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log('submit name ===>', inputValues.name);
        console.log('submit firstName ===>', inputValues.firstName);
        console.log('submit text ===>', inputValues.text);
    };

    return (
        <div>
            <Form>
                <h1>Formulaire</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nom :</label>
                        <input type="text" name="name" placeholder={inputValues.name} className="form-control" onChange={handleOnChange} />
                    </div>
                    <div>
                        <label>Prénom :</label>
                        <input type="text" name="firstName" placeholder={inputValues.firstName} className="form-control" onChange={handleOnChange} />
                    </div>
                    <div>
                        <label>Texte :</label>
                        <textarea name="text" placeholder={inputValues.text} onChange={handleOnChange} cols="30" rows="10" />
                    </div>
                    <button>Submit</button>
                </form>
            </Form>
        </div>
    );
};

export default Formulaire;
