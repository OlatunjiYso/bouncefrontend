import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import UserForm from '../UserForm';

const UserEditButton = ({ user, editUserHandler }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<>
        <Button variant="outline-success" size='sm' onClick={handleShow}>
            Edit
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update User Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UserForm
                    user={user}
                    submitHandler={editUserHandler}
                    handleCloseModal={handleClose}
                />
            </Modal.Body>
        </Modal>
    </>)
};

export default UserEditButton;