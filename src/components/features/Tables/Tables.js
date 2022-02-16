import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import { Spinner } from 'react-bootstrap';
import { getAllTables } from '../../../redux/tablesRedux';
import TableListItem from '../TableListItem/TableListItem';

const Tables = () => {
  const tables = useSelector(getAllTables);

  return (
    <ListGroup>
      {tables.length === 0 && (
        <Spinner animation="border" role="status" className="m-auto">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {tables.map((table) => (
        <TableListItem key={table.id} {...table} />
      ))}
    </ListGroup>
  );
};

export default Tables;
