import React, {useState} from 'react';

const useFormHandler = (user)=> {
    const [userData, setUserData] = useState(user);

    const handleInputChange = (event) => {
        event.persist();
        setUserData({...userData, [event.target.name]: event.target.value});
      }
    const setUserSurvey = (surveys) => {
        setUserData({ ...userData, surveys });
      }
    return {
        handleInputChange,
        setUserSurvey,
        userData
    };
}

export default useFormHandler;
