//action names
const createActionName = (actionName) => `app/tables/${actionName}`;

const UPDATE_TABLES = createActionName('UPDATE_TABLES');

//selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, id) =>
  tables.find((table) => table.id === id);

//action creators
export const updateTables = (payload) => ({
  type: UPDATE_TABLES,
  payload,
});

export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then((response) => response.json())
      .then((tables) => dispatch(updateTables(tables)));
  };
};

//subreducer
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    default:
      return statePart;
  }
};

export default tablesReducer;
