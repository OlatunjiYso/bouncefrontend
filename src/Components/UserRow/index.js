import React from 'react';
import './UserRow.css';
import UserEditButton from '../EditButton';
import UserDeleteButton from '../DeleteButton';

const userRow = ({ user, count, deleteUserHandler, editUserHandler}) => {
    let thisYear = new Date().getFullYear();
    const { name, dateOfBirth, gender, email, surveys, registeredAt } = user;
    return (
        <tr>
            <td width="3%">{count}</td>
            <td width='10%'>{name}</td>
            <td width={'5%'}>
                {
                dateOfBirth &&
                (thisYear - dateOfBirth.split('-')[0])
                }
                </td>
            <td width={'6%'}>{gender}</td>
            <td width={'8%'}>{email}</td>
            <td width="6%">
                {
                registeredAt &&
                (registeredAt.split('-')[0])
                }
                </td>
            <td width="12%">
                {surveys &&
                    <ul>
                        {
                            surveys.map(s => (
                                <li>{s}</li>
                            ))
                        }
                    </ul>

                }
            </td>
            <td width="10%">
                <span className="user-action-btn">
                    <UserEditButton
                        editUserHandler={editUserHandler}
                        user={user}
                        size='sm'
                        variant="outline-success">
                        Edit
                    </UserEditButton>
                </span>
                <span className="user-action-btn">
                    <UserDeleteButton
                        deleteUserHandler={deleteUserHandler}
                        user={user}
                        variant="outline-danger"
                        size='sm'>
                        Delete
                    </UserDeleteButton>
                </span>
            </td>
        </tr>
    );
}

export default userRow;