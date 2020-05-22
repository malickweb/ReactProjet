import React, { useState } from 'react';

//Styles
import './Menu.css';

//Json Menu
import menus from '../../json/Menu-json';

const SubMenu = ({ handleClick }) => {
    console.log('dom', window.location.pathname);
    return Object.keys(menus).map((section, index) => {
        if (menus[section].isSousMenu) {
            const sousMenu = menus[section].sousMenus.map((e, i) => {
                return (
                    <li key={i} className={window.location.pathname === e.anchorUrl ? 'actif' : ''}>
                        <a href={e.anchorUrl} onClick={handleClick}>
                            {e.titre}
                        </a>
                    </li>
                );
            });
            return (
                <li key={index} className={window.location.pathname === menus[section].anchorUrl ? 'actif' : ''}>
                    <a href={menus[section].anchorUrl} onClick={handleClick}>
                        {menus[section].title}
                    </a>
                    <ul>{sousMenu}</ul>
                </li>
            );
        } else {
            return (
                <li key={index} className={window.location.pathname === menus[section].anchorUrl ? 'actif' : ''}>
                    <a href={menus[section].anchorUrl} onClick={handleClick}>
                        {menus[section].title}
                    </a>
                </li>
            );
        }
    });
};

const Menu = () => {
    const [isToggleOn, setIsToggleOn] = useState(false);
    const [isCurrentPage, setIsCurrentPage] = useState(window.location.pathname);

    const onClickfoo = e => {
        e.preventDefault();
        setIsToggleOn(false);
        setIsCurrentPage(e.target.pathname);
        console.log('isCurrentPage', isCurrentPage);
        console.log('e.currentTarget.pathname', e.target.pathname);
    };

    return (
        <nav>
            <div className={isToggleOn ? 'hide' : 'show'}>
                <ul>
                    <SubMenu handleClick={onClickfoo} />
                </ul>
            </div>
        </nav>
    );
};

export default Menu;
