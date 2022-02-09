import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { deleteTableRequest } from '../../../redux/tablesRedux';
import DeleteModal from '../DeleteModal/DeleteModal';

const TableListItem = ({ id, status }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const handleDelete = (id) => {
    dispatch(deleteTableRequest(id));
  };
  return (
    <ListGroup.Item className="d-flex flex-row align-items-center justify-content-between">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h2 className="d-inline-block mb-0 p-3">Table {id}</h2>{' '}
        <p className="d-inline-block mb-0 p-3">
          <strong>Status:</strong> {status}
        </p>
      </div>

      <div>
        <Button as={Link} to={`/tables/${id}`} className="m-1">
          Show more
        </Button>
        <Button onClick={() => setShowModal(true)} className="btn-danger m-1">
          Delete
        </Button>
      </div>
      <DeleteModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleShow={() => setShowModal(true)}
        deleteTable={() => handleDelete(id)}
      />
    </ListGroup.Item>
  );
};
TableListItem.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

export default TableListItem;
