/** @jsx jsx */
// import React from 'react';
import { css, jsx } from '@emotion/core';

const Slide = ({ slides }) => (
    <div
        css={css`
      height: 100%;
      width: 100%;
      background-image: url('${slides}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
    />
);

export default Slide;
