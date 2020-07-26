/** @jsx jsx */

import { css, jsx } from '@emotion/core';

const Arrow = ({ handleClick, name, activeIndex }) => {
    console.log('Active ', activeIndex);
    return (
        <button
            css={css`
                ${name === 'Left' && activeIndex === 0 ? 'display: none;' : 'display: block;'}
                position: absolute;
                top: 45%;
                ${name === 'Left' ? 'left: 0;' : 'left: 750px;'}
                padding: 10px 15px;
                z-index: 3;
            `}
            onClick={handleClick}
        >
            {name}
        </button>
    );
};

export default Arrow;
