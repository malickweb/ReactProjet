import { useState } from 'react';

// Component CSS
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Component
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Images from './Images';
import Dots from './Dots';

const Section = css`
    max-width: 800px;
    margin: 25px auto 0;
    padding: 10px 15px;
    overflow: hidden;
`;

const SliderCSS = css`
    position: relative;
    height: 500px;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
`;

/**
 * @function Slider
 */

const Slider = () => {
    const firstSlide = Images[0];
    const lastSlide = Images[Images.length - 1];
    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45,
        width: 815,
        _slide: [firstSlide, lastSlide]
    });

    const { translate, transition, activeIndex, width } = state;

    const Image = Images.map((e, i) => {
        return <Slide slides={e} key={i} />;
    });

    const esize = () => {
        return console.log('RESIZE', window.innerWidth);
    };
    const Resize = window.addEventListener('resize', esize);

    const btnPrev = () => {
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            });
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * width
        });
    };

    const btnNext = () => {
        if (activeIndex === Images.length - 1) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            });
        }

        setState({
            ...state,
            translate: (activeIndex + 1) * width,
            activeIndex: activeIndex + 1
        });
    };

    return (
        <div onChange={Resize} css={Section}>
            <div css={SliderCSS}>
                <SliderContent translate={translate} transition={transition} dataWidth={width * Images.length}>
                    {Image}
                </SliderContent>

                <Arrow handleClick={btnPrev} name="Left" activeIndex={activeIndex} />
                <Arrow handleClick={btnNext} name="Rigth" activeIndex={activeIndex} />

                <Dots images={Images} activeIndex={activeIndex} dataWidth={width} />
            </div>
        </div>
    );
};

export default Slider;
