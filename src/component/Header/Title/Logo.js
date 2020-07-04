import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Div = styled.div`
    display: inline-block;
    a {
        display: block;
        min-width: 150px;
    }
`;

const Logo = () => {
    return (
        <Div>
            <Link className="test" to="/">
                test
            </Link>
        </Div>
    );
};

export default Logo;
