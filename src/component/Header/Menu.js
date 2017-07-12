import React, { Component } from 'react';

//Styles
import './Menu.css';

//Json Menu
import menus from '../../json/Menu-json';

class Menu extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      isclicked: [true, false, false, false, false],
      menu : menus
    };
  }



  render() {
    const clicked = this.state.isclicked;

      const sections = menus;
      const output = Object.keys(sections).map(function (section, index){
        console.log(section);
      return (
        <li key={ index } className={ clicked[index] ? 'active' : '' }>
          <a href={ sections[section].anchorUrl }>
            { sections[section].title }
          </a>
        </li>
      )
    })
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className={ this.state.isToggleOn ? 'none' : 'inline-block' }>

                <div className="navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                      { output }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;
