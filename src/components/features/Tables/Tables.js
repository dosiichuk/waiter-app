import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

import { getAllTables } from '../../../redux/tablesRedux';
import TableListItem from '../TableListItem/TableListItem';
import SpinnerComponent from '../../common/SpinnerComponent/SpinnerComponent';

const Tables = () => {
  const tables = useSelector(getAllTables);

  return (
    <ListGroup>
      {tables.length === 0 && <SpinnerComponent />}
      {tables.map((table) => (
        <TableListItem key={table.id} {...table} />
      ))}
    </ListGroup>
  );
};

export default Tables;
