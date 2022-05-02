import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ConfirmDialog = ({
    show,
    onClose,
    onConfirm
}) => {

    return (
        <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete listing</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this listing?</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={onClose}>
            Close
          </Button>
          <Button variant="dark" onClick={onConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ConfirmDialog;