import React from "react";

import SurveyItem from './SurveyItem';
import './SurveyDisplay.css'

const surveyDisplay = ({surveys, removeSurvey})=> {
    return (
        <>
        <p>
            User Surveys
        </p>
        <div className="survey-display-box">
            {   surveys &&
                surveys.map((s, idx)=><SurveyItem key={idx} survey={s} removeSurvey={removeSurvey}
                />)
            }
        </div>
        </>
    )
}



export default surveyDisplay;