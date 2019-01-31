import { createStore, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    form: formReducer
  }),
  composeEnhancers()
);
