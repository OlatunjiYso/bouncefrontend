import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import UserForm from '../UserForm';

const AddUserButton = ({ addUserHandler }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<>
        <Button variant="outline-primary" size='sm' onClick={handleShow}>
            + Add User
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UserForm
                    user={null}
                    submitHandler={addUserHandler}
                    handleCloseModal={handleClose} />
            </Modal.Body>
        </Modal>
    </>)
};

export default AddUserButton;