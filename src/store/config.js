'use strict'
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import {
  reducer as reduxForm
} from 'redux-form'
import thunk from 'redux-thunk'
import index from '../reducers'

/**
 * Allows for async calls for react
 * @var thunk
 */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      index,
      form: reduxForm
    }), {},
    composeEnhancers(applyMiddleware(thunk)));
  return store;
};
