import { Spinner } from 'react-bootstrap';

const SpinnerComponent = () => {
  return (
    <Spinner animation="border" role="status" className="m-auto">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default SpinnerComponent;
