import React, { Component } from 'react';

//Styles
import './Menu.css';

//Json Menu
import menus from '../../json/Menu-json';

class Menu extends Component {
    state = {
        isToggleOn: false
    };

    render() {
        const output = Object.keys(menus).map(function(section, index) {
            if (menus[section].isSousMenu === true) {
                const foo = menus[section].sousMenus.map(function(e, i) {
                    return (
                        <li key={i}>
                            <a href={e.anchorUrl}>{e.titre}</a>
                        </li>
                    );
                });
                return (
                    <li key={index}>
                        <a href={menus[section].anchorUrl}>{menus[section].title}</a>
                        <ul>{foo}</ul>
                    </li>
                );
            } else {
                return (
                    <li key={index}>
                        <a href={menus[section].anchorUrl}>{menus[section].title}</a>
                    </li>
                );
            }
        });

        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className={this.state.isToggleOn ? 'hide' : 'show'}>
                                <div className="navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav">{output}</ul>
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
