import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getTableById } from '../../../redux/tablesRedux';

const Table = ({ id }) => {
  const table = useSelector((state) => getTableById(state, parseInt(id)));
  if (!table) return <Container>Table with this is not found</Container>;

  return (
    <Container>
      <h1>Table {id}</h1>
    </Container>
  );
};
Table.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Table;
