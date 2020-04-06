// import React, { Component, useState } from 'react';
import React, { useState } from 'react';

//Styles
import './Menu.css';

//Json Menu
import menus from '../../json/Menu-json';

// class SubMenu extends Component {
//     render() {
//         return Object.keys(menus).map((section, index) => {
//             if (menus[section].isSousMenu === true) {
//                 const sousMenu = menus[section].sousMenus.map((e, i) => {
//                     return (
//                         <li key={i}>
//                             <a href={e.anchorUrl} onClick={this.props.handleClick}>
//                                 {e.titre}
//                             </a>
//                         </li>
//                     );
//                 });
//                 return (
//                     <li key={index}>
//                         <a href={menus[section].anchorUrl} onClick={this.props.handleClick}>
//                             {menus[section].title}
//                         </a>
//                         <ul>{sousMenu}</ul>
//                     </li>
//                 );
//             } else {
//                 return (
//                     <li key={index}>
//                         <a href={menus[section].anchorUrl} onClick={this.props.handleClick}>
//                             {menus[section].title}
//                         </a>
//                     </li>
//                 );
//             }
//         });
//     }
// }

// class Menu extends Component {
//     state = {
//         isToggleOn: false,
//         isCurrentPage: '/'
//     };
//     onClickfoo = e => {
//         console.log('in');
//         this.setState({
//             isCurrentPage: this.state.isCurrentPage
//         });
//         console.log('this.state.isCurrentPage', this.state.isCurrentPage);
//         //e.preventDefault();
//         console.log('e.currentTarget.pathname', e.target.pathname);
//     };

//     render() {
//         return (
//             <nav className="navbar navbar-default navbar-fixed-top">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-xs-12">
//                             <div className={this.state.isToggleOn ? 'hide' : 'show'}>
//                                 <div className="navbar-collapse" id="bs-example-navbar-collapse-1">
//                                     <ul className="nav navbar-nav">
//                                         <SubMenu handleClick={this.onClickfoo} />
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         );
//     }
// }

const SubMenu = () => {
    return Object.keys(menus).map((section, index) => {
        if (menus[section].isSousMenu === true) {
            const sousMenu = menus[section].sousMenus.map((e, i) => {
                return (
                    <li key={i}>
                        <a href={e.anchorUrl} onClick={this.props.handleClick}>
                            {e.titre}
                        </a>
                    </li>
                );
            });
            return (
                <li key={index}>
                    <a href={menus[section].anchorUrl} onClick={this.props.handleClick}>
                        {menus[section].title}
                    </a>
                    <ul>{sousMenu}</ul>
                </li>
            );
        } else {
            return (
                <li key={index}>
                    <a href={menus[section].anchorUrl} onClick={this.props.handleClick}>
                        {menus[section].title}
                    </a>
                </li>
            );
        }
    });
};

const Menu = () => {
    const [isToggleOn, setIsToggleOn] = useState(false);
    const [isCurrentPage, setIsCurrentPage] = useState('/');

    const onClickfoo = e => {
        e.preventDefault();
        setIsToggleOn(false);
        setIsCurrentPage(e.target.pathname);
        console.log('isCurrentPage', isCurrentPage);
        //console.log('e.currentTarget.pathname', e.target.pathname);
    };

    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className={isToggleOn ? 'hide' : 'show'}>
                            <div className="navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <SubMenu handleClick={onClickfoo} />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
