import axios from 'axios';
const baseUrl = 'http://localhost:8080/api/v1';


export const addUser = async(user)=> {
    try {
        const registeredAt = new Date().getFullYear()+'-'+ new Date().getMonth();
        user.registeredAt = registeredAt;
       const response = await axios.post(`${baseUrl}/users`, user);
       return response;
    } 
    catch(err) {
        throw err;
    }
}

export const fetchUser = async()=> {
    try {
       const response = await axios.get(`${baseUrl}/users`);
       return response.data.data.users;

    } 
    catch(err) {
        throw err;
    }
}

export const editUser = async(user)=> {
    try {
       const response = await axios.put(`${baseUrl}/users/${user.id}`, user);
       return response;
    } 
    catch(err) {
        throw err;
    }
}

export const deleteUser = async(userId)=> {
    try {
       const response = await axios.delete(`${baseUrl}/users/${userId}`);
       return response;
    } 
    catch(err) {
        throw err;
    }
}