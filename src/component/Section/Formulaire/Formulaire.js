import React, { Component } from 'react';

//Menu
import Menu from '../../Header/Menu';

class Formulaire extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      value: '',
      valuee: '',
      valuetext: 'Please write an essay about your favorite DOM element.'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange( event ) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit( event ) {
    console.log('Ton nom : ' + this.state.value);
    console.log('Ton nom : ' + this.state.valuee);
    console.log('Ton text : ' + this.state.valuetext);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Menu></Menu>

        <section>
          <div className="container">
            <div className="row">
              <h1>Formulaire</h1>
              <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                  <label>Name:</label>
                  <input type="text"
                         name="value"
                         className="form-control"
                         value={ this.state.value }
                         onChange={ this.handleChange } />
                </div>
                <div className="form-group">
                  <label>Names:</label>
                  <input type="text"
                         name="valuee"
                         className="form-control"
                         value={ this.state.valuee }
                         onChange={ this.handleChange } />
                </div>
                <div className="form-group">
                  <label>Texte:</label>
                  <textarea name="valuetext"
                            className="form-control"
                            value={ this.state.valuetext }
                            onChange={ this.handleChange }
                            cols="30" rows="10">
                  </textarea>
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
