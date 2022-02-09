//selectors
export const getAllStatuses = ({ status }) => status;

//action creators

//subreducer
const statusReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};

export default statusReducer;
