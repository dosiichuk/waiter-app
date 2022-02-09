import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import PropTypes from 'prop-types';

const DeleteModal = ({ show, handleShow, handleClose, deleteTable }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This operation will permanently delete the table. Would you like to
          proceed?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={deleteTable}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

DeleteModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleShow: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  deleteTable: PropTypes.func.isRequired,
};

export default DeleteModal;
