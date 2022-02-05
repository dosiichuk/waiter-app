import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Table from '../../features/Table/Table';

const TableInfo = () => {
  const { id } = useParams();
  return (
    <Container>
      <Table id={id} />
    </Container>
  );
};

export default TableInfo;
