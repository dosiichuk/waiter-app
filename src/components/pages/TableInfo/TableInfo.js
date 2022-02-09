import { Container } from 'react-bootstrap';

import { useParams } from 'react-router-dom';
import TableForm from '../../features/TableForm/TableForm';

const TableInfo = () => {
  const { id } = useParams();
  return (
    <Container>
      <TableForm id={id} action="Update" />
    </Container>
  );
};

export default TableInfo;
