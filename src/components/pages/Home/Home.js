import { Container } from 'react-bootstrap';

import Tables from '../../features/Tables/Tables';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <Container className={styles.container}>
      <h1>All Tables</h1>
      <Tables />
    </Container>
  );
};

export default Home;
