import React, { Component } from 'react';

//Menu
import Menu from '../../Header/Menu';

class Formulaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            firstName: '',
            valuetext: 'Please write an essay about your favorite DOM element.'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Nom : ' + this.state.name);
        console.log('Prenom : ' + this.state.firstName);
        console.log('Ton text : ' + this.state.valuetext);
        console.log('event ===> ', event.type);
        console.log('event ===> ', event.isTrusted);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Menu />

                <section>
                    <div className="container">
                        <div className="row">
                            <h1>Formulaire</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>First names:</label>
                                    <input type="text" name="firstName" className="form-control" value={this.state.firstName} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Texte:</label>
                                    <textarea name="valuetext" className="form-control" value={this.state.valuetext} onChange={this.handleChange} cols="30" rows="10" />
                                </div>
                                <button className="btn btn-default">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Formulaire;
