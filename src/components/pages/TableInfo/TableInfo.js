import { Container } from 'react-bootstrap';

import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTableById } from './../../../redux/tablesRedux';
import TableForm from '../../features/TableForm/TableForm';

const TableInfo = () => {
  const { id } = useParams();

  const table = useSelector((state) => getTableById(state, parseInt(id)));
  if (!table) return <Navigate to="/" />;
  return (
    <Container className="mx-auto">
      <TableForm id={id} action="Update" />
    </Container>
  );
};

export default TableInfo;
