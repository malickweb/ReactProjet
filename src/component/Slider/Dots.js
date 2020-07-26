/** @jsx jsx */

import { css, jsx } from '@emotion/core';

const Dot = ({ active }) => {
    return (
        <div
            css={css`
                display: inline-block;
                width: 10px;
                height: 10px;
                border: 1px solid #000;
                border-radius: 50%;
                background-color: ${active ? '#fff' : '#000'};
            `}
        />
    );
};

const Dots = ({ images, activeIndex, dataWidth }) => {
    console.log({ images });
    console.log({ activeIndex });
    console.log({ dataWidth });
    return (
        <div
            css={css`
                position: absolute;
                top: 0;
                left: calc((${dataWidth}px - 15px) / 2);
            `}
        >
            {images.map((image, i) => (
                <Dot key={image} active={activeIndex === i} />
                // <div key={image}>{i}</div>
            ))}
        </div>
    );
};

export default Dots;
