// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';

//Menu
import Menu from '../../Header/Menu';

// Styles
import './Clock.css';

const Reload = () => {
    const [isTime, setIsTime] = useState(new Date().toLocaleTimeString());
    const [isDate] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        setTimeout(() => {
            time();
        }, 1000);
    });
    const time = () => {
        setIsTime(new Date().toLocaleTimeString());
        console.log('isDate', isDate);
    };
    return (
        <section className="containerClock">
            <p>Nous sommes le {isDate}</p>
            <p>il est {isTime}</p>
        </section>
    );
};

const Clock = () => {
    return (
        <div>
            <Menu />
            <Reload />
        </div>
    );
};

export default Clock;
