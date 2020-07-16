import { useState } from 'react';

// Component CSS
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

// Component
import SliderContent from './SliderContent';
import Slide from './Slide';
import Images from './Images';

const Section = css`
    max-width: 800px;
    margin: 25px auto 0;
    padding: 10px 15px;
    overflow: hidden;
`;

const SliderCSS = css`
    position: relative;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
`;

const Btn = css`
    position: absolute;
    height: 150px;
    width: 50px;
    margin: 0 auto;
    z-index: 3;
`;
const BtnNext = css`
    position: absolute;
    top: 0;
    left: 740px;
    height: 150px;
    width: 50px;
    margin: 0 auto;
    z-index: 3;
`;

/**
 * @function Slider
 */

const Slider = () => {
    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45,
        width: 815
    });

    const { translate, transition, activeIndex, width } = state;

    console.log('state', state);

    // const getWidth = () => window.innerWidth;

    const Image = Images.map((e, i) => {
        return <Slide slides={e} key={i} />;
    });

    const btnPrev = () => {
        console.log('PREV ===> IMAGES LENGTH', Images.length);
        console.log('PREV ===> activeIndex', activeIndex);
        if (activeIndex === 0) {
            console.log('00');
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            });
        }
        console.log('ce=hekc', activeIndex * width);
        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * width
        });
    };

    const btnNext = () => {
        console.log('NEXT ===> IMAGES LENGTH', Images.length);
        console.log('NEXT ===> activeIndex', activeIndex);
        if (activeIndex === Images.length - 1) {
            console.log('01');
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            });
        }
        console.log('Next', activeIndex * width);
        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * width
        });
    };

    return (
        <div css={Section}>
            <div css={SliderCSS}>
                <button css={Btn} onClick={btnPrev}>
                    {'prev'}
                </button>
                <SliderContent translate={translate} transition={transition} dataWidth={width * Images.length}>
                    {Image}
                </SliderContent>
                <button css={BtnNext} onClick={btnNext}>
                    {'next'}
                </button>
            </div>
        </div>
    );
};

export default Slider;
