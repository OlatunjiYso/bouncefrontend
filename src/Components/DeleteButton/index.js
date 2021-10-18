import React, {useState}  from 'react';
import { Button, Modal } from 'react-bootstrap';

const UserDeleteButton = ({ user, deleteUserHandler }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<>
        <Button variant="outline-danger" size='sm' onClick={handleShow}>
            Del
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete {user.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p> Are you sure ?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={()=>{deleteUserHandler(user.id); handleClose();}}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    </>)
};

export default UserDeleteButton;