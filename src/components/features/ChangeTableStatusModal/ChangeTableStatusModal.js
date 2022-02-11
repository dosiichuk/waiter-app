import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import PropTypes from 'prop-types';

const ChangeTableStatusModal = ({
  show,
  handleShow,
  handleClose,
  changeCategory,
  cancelChange,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This operation will nullify the bill and the number of guests? Do you
          wish to checkout the table?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              cancelChange();
              handleClose();
            }}
          >
            Cancel
          </Button>
          <Button variant="primary" onClick={changeCategory}>
            Checkout table
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
ChangeTableStatusModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleShow: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  changeCategory: PropTypes.func.isRequired,
  cancelChange: PropTypes.func.isRequired,
};

export default ChangeTableStatusModal;
