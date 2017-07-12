import React, { Component } from 'react';

//Menu
import Menu from '../../Header/Menu';

class Show extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      isToggleOn: false
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind( this );
  }

  handleClick() {
    this.setState( prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    console.log( this.state.isToggleOn );
  }

  render() {
    return (
      <section>

        <Menu></Menu>

        <div>
          <button onClick={ this.handleClick }>
            { this.state.isToggleOn ? 'ON' : 'OFF' }
          </button>
        </div>
      </section>

    );
  }
}

export default Show;
