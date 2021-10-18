import React from 'react';
import './SurveyItem.css';

const SurveyItem = ({ survey, removeSurvey }) => {
    return (
        <div className="survey-item">
            <p> {survey} </p>
            <span id="delete-tag" onClick={()=>removeSurvey(survey)}> X </span>
        </div>
    );
}

export default SurveyItem;