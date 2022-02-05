import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const TableListItem = ({ id, status }) => {
  return (
    <ListGroup.Item className="d-flex flex-row align-items-center justify-content-between">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h2 className="d-inline-block mb-0 p-3">Table {id}</h2>{' '}
        <p className="d-inline-block mb-0 p-3">
          <strong>Status:</strong> {status}
        </p>
      </div>
      <Button as={Link} to={`/tables/${id}`}>
        Show more
      </Button>
    </ListGroup.Item>
  );
};
TableListItem.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

export default TableListItem;
