import React from 'react';
import SurveyOption from '../Survey/SurveyOption';

import styled from '@emotion/styled';

const Section = styled.section`
    max-width: 800px;
    margin: 25px auto 0;
    padding: 10px 15px;
`;

const Survey = () => {
    return (
        <div>
            <Section>
                <SurveyOption />
            </Section>
        </div>
    );
};

export default Survey;
