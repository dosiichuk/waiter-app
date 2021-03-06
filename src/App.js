import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { fetchTables } from './redux/tablesRedux';

import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import TableInfo from './components/pages/TableInfo/TableInfo';
import AddTable from './components/pages/AddTable/AddTable';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container className="d-flex vh-100 flex-column justify-content-between">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tables/new" element={<AddTable />} />
        <Route path="/tables/:id" element={<TableInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
