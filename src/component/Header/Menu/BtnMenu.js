import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
// JSON Menu
import menus from '../../../json/Menu-json';

const SubMenu = () => {
    const [isCurrentPage, setIsCurrentPage] = useState(window.location.pathname);

    const onClickfoo = e => {
        setIsCurrentPage(e.target.pathname);
        console.log('isCurrentPage', isCurrentPage);
        console.log('e.currentTarget.pathname', e.target.pathname);
    };

    const Li = styled.li`
        position: relative;
        display: inline-block;
        &.actif {
            background-color: #fff;
            a {
                color: #000;
            }
        }
        a {
            display: block;
            padding: 15px 20px;
            text-decoration: none;
            text-align: center;
            color: #fff;
        }
        ul {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            padding: 0;
            li {
                display: none;
                &:hover {
                    color: #000;
                    background-color: #fff;
                    li {
                        padding: 20px;
                    }

                    a {
                        color: #000;
                    }
                }
            }
        }

        &:hover {
            a {
                color: #000;
            }
            background-color: #fff;
            li {
                display: block;
                padding: 10px;
                background-color: #000;
                a {
                    color: #fff;
                }
            }
        }
    `;

    return Object.keys(menus).map((section, index) => {
        if (menus[section].isSousMenu) {
            const sousMenu = menus[section].sousMenus.map((e, i) => {
                return (
                    <li key={i} className={window.location.pathname === e.anchorUrl ? 'actif' : ''}>
                        <Link to={e.anchorUrl} onClick={onClickfoo}>
                            {e.titre}
                        </Link>
                    </li>
                );
            });
            return (
                <Li key={index} className={window.location.pathname === menus[section].anchorUrl ? 'actif' : ''}>
                    <Link to={menus[section].anchorUrl} onClick={onClickfoo}>
                        {menus[section].title}
                    </Link>
                    <ul>{sousMenu}</ul>
                </Li>
            );
        } else {
            return (
                <Li key={index} className={window.location.pathname === menus[section].anchorUrl ? 'actif' : ''}>
                    <Link to={menus[section].anchorUrl} onClick={onClickfoo}>
                        {menus[section].title}
                    </Link>
                </Li>
            );
        }
    });
};

export default SubMenu;
