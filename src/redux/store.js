import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import initialState from './initialState';
import thunk from 'redux-thunk';

import tablesReducer from './tablesRedux';
import statusReducer from './statusRedux';

const subreducers = { tables: tablesReducer, status: statusReducer };

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
