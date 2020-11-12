import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import buildReducer from './reducers/buildReducer';
import settingsReducer from './reducers/settingsReducer';

const reducer = combineReducers({
  build: buildReducer,
  settings: settingsReducer
});

const store = createStore(
  reducer,
  composeWithDevTools()
);

export default store;
