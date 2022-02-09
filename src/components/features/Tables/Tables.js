import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import { getAllTables } from '../../../redux/tablesRedux';
import TableListItem from '../TableListItem/TableListItem';

const Tables = () => {
  const tables = useSelector(getAllTables);
  return (
    <ListGroup>
      {tables.map((table) => (
        <TableListItem key={table.id} {...table} />
      ))}
    </ListGroup>
  );
};

export default Tables;
