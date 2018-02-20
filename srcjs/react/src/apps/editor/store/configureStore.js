// - Import external components
import * as redux from 'redux'
import thunk from 'redux-thunk'

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

middlewares.push(thunk);

import {globalReducer} from '../reducers/globalReducer'

const preloadedState = window.__PRELOADED_STATE__;

// - Reducers
const reducer = redux.combineReducers({
  globalAppData: globalReducer
});


// - Config and create store of redux
const store = redux.createStore(reducer, preloadedState, redux.compose(
  redux.applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
))

export default store
