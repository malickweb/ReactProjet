import styled from '@emotion/styled';

const SliderContent = styled.div`
    display: flex;
    width: ${props => props.dataWidth}px;
    height: 100%;
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
`;

export default SliderContent;
