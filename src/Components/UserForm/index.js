import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './UserForm.css';

import SurveyDisplay from '../SurveyDisplay';
import useFormHandler from '../../Hooks/userFormHook';

const UserForm = ({ user, submitHandler, handleCloseModal }) => {

    const defaultUser = (user) ? user : {
        name: '',
        email: '',
        dateOfBirth: '2002-01-01',
        gender: "Male",
        surveys: []
    }

    const {
        handleInputChange,
        setUserSurvey,
        userData
    } = useFormHandler(defaultUser);
    const [localSurvey, setLocalSurvey] = useState('');

    const addNewSurvey = () => {
        if (localSurvey.trim().length > 0) {
            const existingSurveys = userData.surveys;
            existingSurveys.push(localSurvey);
            setUserSurvey(existingSurveys);
            setLocalSurvey('');
        }
    }

    const removeSurvey = (unwantedSurvey) => {
        const existingSurveys = userData.surveys;
        const filteredSurvey = existingSurveys.filter(((s) => s !== unwantedSurvey))
        setUserSurvey(filteredSurvey);
    }

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
          }
          submitHandler(userData);
          handleCloseModal();
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="row mb-3">
                <div className="form-row">
                    <label>Full Name</label>
                    <input className="form-input" type="text" name="name"
                        onChange={handleInputChange}
                        value={userData.name} required>
                    </input>
                </div>
                <div className="form-row">
                    <label>Email </label>
                    <input className="form-input" type="text" name="email"
                        onChange={handleInputChange}
                        value={userData.email} required>
                    </input>
                </div>
            </div>
            <div className="row mb-3">
                <div className="form-row">
                    <label>Date of Birth</label>
                    <input className="form-input" type="date" name="dateOfBirth"
                        onChange={handleInputChange}
                        value={userData.dateOfBirth} required>
                    </input>
                </div>
                <div className="form-row">
                    <div onChange={handleInputChange}>
                        <p style={{ margin: 1 }}>Select your Gender:</p>
                        <input style={{ marginRight: 5 }} type="radio" defaultChecked value="Male" name="gender" /> Male
                        <input style={{ marginLeft: 5 }} type="radio" value="Female" name="gender" /> Female
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-12">
                    <SurveyDisplay surveys={userData.surveys} removeSurvey={removeSurvey} />
                    <input className="survey-input" type="text" name=""
                        value={localSurvey} onChange={(e) => setLocalSurvey(e.target.value)}
                        placeholder="Add a new survey">
                    </input>
                    <span className="add-survey-btn" onClick={addNewSurvey}> Add survey </span>
                </div>
            </div>

            <div className="form-btn-row">
                    <Button className="" variant="danger" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button className="" variant="success" type="submit">
                        Submit
                    </Button>
                {/* <div className="form-row">
                    <Button className="form-input" variant="danger" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                </div>
                <div className="form-row">
                    <Button className="form-input" variant="success" type="submit">
                        Submit
                    </Button>
                </div> */}
            </div>
        </form>
    );
}


export default UserForm;