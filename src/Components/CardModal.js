import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';


function CardModal(props) {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleUpdate = () => {
        props.updateUser('update', userInfoForm)
        setShow(false)
    };

    const handleDelete = () => {
        // opencofirm
        setShowConfirmModal(true)

        setShow(false)
    }


    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const handleConfirmClose = () => setShowConfirmModal(false);

    const handleConfirmDelete = () => {
        props.updateUser('delete', userInfoForm);
        setShowConfirmModal(false)
    };



    let userInfoForm = JSON.parse(JSON.stringify(props.user))
    const updateForm = (type, target) => {
        
        if (type === 'address') {
            userInfoForm.address[target.name] = target.value
        } else {
            userInfoForm[target.name] = target.value
        }
    }



    return (
        <div>
            <Button variant="primary" onClick={() => handleShow()}>
                Edit User
            </Button>

            <Modal show={showConfirmModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure want to Delete the user ?</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-center'>
                    <Button className='m-2' variant="danger" onClick={() => handleConfirmDelete()}>
                        Delete
                    </Button>
                    <Button variant="primary" onClick={() => handleConfirmClose()} >
                        Cancel
                    </Button>
                </Modal.Body>
            </Modal>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>User Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                                type="text"
                                name='username'
                                defaultValue={userInfoForm.username}
                                onChange={(e) => updateForm('general', e.target)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                name='city'
                                defaultValue={userInfoForm.address.city}
                                onChange={(e) => updateForm('address', e.target)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleUpdate}>
                        Update
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>

                    <Button variant="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CardModal;




