import React, { useEffect, useState } from 'react';
import { Table, } from 'react-bootstrap';
import './UserTable.css';
import { toast } from 'react-toastify';
import { addUser, fetchUser, editUser, deleteUser } from '../../Actions/users';


import UserRow from '../UserRow';
import AddUserButton from '../AddButton';


const UsersTable = () => {
    const [users, setUsers] = useState([]);

    const deleteUserHandler = async (id) => {
        try {
            const response = await deleteUser(id);
            const remainingUsers = response.data.data.users;
            setUsers(remainingUsers);
            toast('User deleted Successfully');
        } catch (err) {
            toast('Error deleting user', { type: 'error' });
        }
    }
    const editUserHandler = async (user) => {
        try {
            const response = await editUser(user);
            const allUsers = response.data.data.users;
            setUsers(allUsers);
            toast('Users edited Successfully')
        } catch (err) {
            toast('Error editing user', { type: 'error' });
        }
    }
    const addUserHandler = async (user) => {
        try {
            const response = await addUser(user);
            setUsers([...users, user]);
            toast('Users added Successfully')
        } catch (err) {
            toast('Error adding user', { type: 'error' });
        }
    }

    useEffect(() => {
        fetchUser()
            .then(response => { setUsers(response); })
            .catch((err) => (toast('Error fetching users', { type: 'error' })));
    }, []);

    const usersList = (
        <>
            <div className="table-head">
                <span>List Of Users</span>
                <AddUserButton
                    user={null}
                    addUserHandler={addUserHandler}
                />
            </div>
            <Table className="users-table" striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Member Since</th>
                        <th>Surveys</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users &&
                        users.length > 0 &&
                        users.map((user, index) => <UserRow
                            key={index}
                            user={user}
                            deleteUserHandler={deleteUserHandler}
                            editUserHandler={editUserHandler}
                            count={index + 1}
                        />)
                    }
                </tbody>
            </Table>
        </>
    )
    return usersList;
};

export default UsersTable;
