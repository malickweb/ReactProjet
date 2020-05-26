import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Reload = () => {
    const [isTime, setIsTime] = useState(new Date().toLocaleTimeString());
    const [isDate] = useState(new Date().toLocaleDateString());

    const Section = styled.section`
        width: 800px;
        margin: 25px auto 0;
        padding: 10px 15px;
        p {
            text-align: center;
        }
    `;

    useEffect(() => {
        var timer = setInterval(() => time(), 1000);
        return function cleanup() {
            clearInterval(timer);
        };
    });

    const time = () => {
        setIsTime(new Date().toLocaleTimeString());
        // console.log('isDate', isDate);
        console.log('isTime', isTime);
    };

    return (
        <Section>
            <p>Nous sommes le {isDate}</p>
            <p>il est {isTime}</p>
        </Section>
    );
};

const Clock = () => {
    return (
        <div>
            <Reload />
        </div>
    );
};

export default Clock;
