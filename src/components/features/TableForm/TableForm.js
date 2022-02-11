import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import shortid from 'shortid';
import { Row } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getTableById } from '../../../redux/tablesRedux';
import { getAllStatuses } from '../../../redux/statusRedux';
import { patchTableRequest, addTableRequest } from '../../../redux/tablesRedux';
import ChangeTableStatusModal from '../ChangeTableStatusModal/ChangeTableStatusModal';

const TableForm = ({ id, action }) => {
  const defaultTableIntance = {
    id: shortid,
    status: 'Free',
    peopleAmount: 0,
    maxPeopleAmount: 3,
    bill: 0,
  };
  const table =
    useSelector((state) => getTableById(state, parseInt(id))) ||
    defaultTableIntance;
  const statuses = useSelector(getAllStatuses);
  const [status, setStatus] = useState(table.status || 'Free');
  const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount || 0);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(
    table.maxPeopleAmount || 0
  );
  const [bill, setBill] = useState(table.bill || 0);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();
  const handleSubmit = (e) => {
    const tableData = {
      id: parseInt(id),
      status,
      peopleAmount: parseInt(peopleAmount),
      maxPeopleAmount: parseInt(maxPeopleAmount),
      bill: parseFloat(bill),
    };
    if (action === 'Update') {
      dispatch(patchTableRequest(tableData));
    } else if (action === 'Add') {
      dispatch(addTableRequest(tableData));
    }

    navigate('/');
  };
  const changeCategoryHandler = (status) => {
    setBill(0);
    setPeopleAmount(0);
    setShowModal(false);
  };
  if (!table) return <Container>Table with this is not found</Container>;

  return (
    <Container>
      <h1>Table {id}</h1>
      <Form onSubmit={validate(handleSubmit)}>
        <Row>
          <Form.Group
            className="mb-3 col-12 col-md-6 d-flex flex-row justify-content-start align-items-center"
            controlId="status"
          >
            <Form.Label className="mb-0 p-2">Status:</Form.Label>
            <Form.Select
              name="status"
              className="w-75"
              value={status}
              onChange={(e) => {
                if (e.target.value !== 'Busy' && status === 'Busy') {
                  setShowModal(true);
                  setStatus(e.target.value);
                  return;
                }
                setStatus(e.target.value);
              }}
            >
              {statuses.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group
            className="mb-3 col-12 col-md-6 d-flex flex-row align-items-center"
            controlId="peopleAmount"
          >
            <Form.Label className="mb-0 p-2">People:</Form.Label>
            <Form.Control
              type="number"
              style={{ width: '60px' }}
              {...register('peopleAmount', {
                required: true,
                pattern: /[0-9]/,
              })}
              value={peopleAmount}
              onChange={(e) => setPeopleAmount(e.target.value)}
            />
            {errors.peopleAmount && (
              <small className="d-block form-text text-danger mt-2">
                Number of people can only be an integer
              </small>
            )}
            <span className="p-2"> / </span>
            <Form.Control
              style={{ width: '60px' }}
              {...register('maxPeopleAmount', {
                required: true,
                max: maxPeopleAmount,
              })}
              type="number"
              value={maxPeopleAmount}
              onChange={(e) => setMaxPeopleAmount(e.target.value)}
            />
            {errors.maxPeopleAmount && (
              <small className="d-block form-text text-danger mt-2">
                Max number cannot exceed default capcity
              </small>
            )}
          </Form.Group>
        </Row>
        {status === 'Busy' && (
          <Row>
            <Form.Group
              className="mb-3 col-12 col-lg-6 d-flex flex-row align-items-center"
              controlId="bill"
            >
              <Form.Label className="mb-0 p-2">Bill:</Form.Label>
              <span className="p-2">$</span>
              <Form.Control
                className="text-center"
                style={{ width: '100px' }}
                value={bill}
                type="number"
                onChange={(e) => setBill(e.target.value)}
              />
            </Form.Group>
          </Row>
        )}

        <Button variant="primary" type="submit">
          {action}
        </Button>
      </Form>
      <ChangeTableStatusModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleShow={() => setShowModal(true)}
        changeCategory={() => changeCategoryHandler(status)}
        cancelChange={() => setStatus('Busy')}
      />
    </Container>
  );
};
TableForm.propTypes = {
  id: PropTypes.string,
};

export default TableForm;
