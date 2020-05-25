import React, { useState } from 'react';

// Styles
import './Formulaire.css';

const Formulaire = () => {
    const [inputValues, setInputValues] = useState({
        name: 'Nom',
        firstName: 'Prénom',
        text: 'Texte ici'
    });

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
            <section className="containerForm">
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
            </section>
        </div>
    );
};

export default Formulaire;
