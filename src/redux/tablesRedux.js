import { API_URL } from '../config';
//action names
const createActionName = (actionName) => `app/tables/${actionName}`;

const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE_SINGLE_TABLE = createActionName('UPDATE_SINGLE_TABLE');
const ADD_TABLE = createActionName('ADD_TABLE');
const DELETE_TABLE = createActionName('DELETE_TABLE');

//selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, id) =>
  tables.find((table) => table.id === id);

//action creators
export const updateTables = (payload) => ({
  type: UPDATE_TABLES,
  payload,
});
export const updateSingleTable = (payload) => ({
  type: UPDATE_SINGLE_TABLE,
  payload,
});
export const addTable = (payload) => ({
  type: ADD_TABLE,
  payload,
});
export const deleteTable = (payload) => ({
  type: DELETE_TABLE,
  payload,
});

export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then((response) => response.json())
      .then((tables) => dispatch(updateTables(tables)));
  };
};
export const patchTableRequest = (tableData) => {
  return (dispatch) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tableData),
    };
    fetch(`${API_URL}/tables/${tableData.id}`, options).then(() =>
      dispatch(updateSingleTable(tableData))
    );
  };
};

export const addTableRequest = (tableData) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tableData),
    };
    fetch(`${API_URL}/tables`, options).then(() =>
      dispatch(addTable(tableData))
    );
  };
};

export const deleteTableRequest = (id) => {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(`${API_URL}/tables/${id}`, options).then(() =>
      dispatch(deleteTable(id))
    );
  };
};

//subreducer
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    case UPDATE_SINGLE_TABLE:
      return statePart.map((table) =>
        table.id === action.payload.id ? action.payload : table
      );
    case ADD_TABLE:
      return [...statePart, action.payload];
    case DELETE_TABLE:
      return statePart.filter((table) => table.id !== action.payload);
    default:
      return statePart;
  }
};

export default tablesReducer;
