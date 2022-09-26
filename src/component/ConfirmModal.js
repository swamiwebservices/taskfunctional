import React  from 'react'
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

function ConfirmModal(props) {
    //const [show, setShow] = useState(props.show);
   
  const handleClose = () => props.setShow(false);
  //const handleShow = () => setShow(true);


  return (
    <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.msg}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { props.setShow(false);
          props.removeTodo(props.taskId);
       
        }}>Delete</Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ConfirmModal