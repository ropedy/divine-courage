import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import buildReducer from './reducers/buildReducer';

const reducer = combineReducers({
  build: buildReducer
});

const store = createStore(
  reducer,
  composeWithDevTools()
);

export default store;
