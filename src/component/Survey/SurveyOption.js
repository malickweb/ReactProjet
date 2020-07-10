import React from 'react';
// import styled from '@emotion/styled';

import surveys from '../../json/Survey-json';

const SurveyOption = () => {
    // const [isSurvey, setIssurvey] = useState(false);

    // const foo = () => {
    //     setIssurvey(true);
    //     console.log('isSurvey', isSurvey);
    // };
    return Object.keys(surveys).map((id, key) => {
        console.log(' key ===> ', key);
        return Object.keys(surveys[id]).map((value, i) => {
            return <div key={i}>{surveys[id][value]}</div>;
        });
    });
};

export default SurveyOption;
