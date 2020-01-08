import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import promise from 'redux-promise-middleware';
import rootSaga from './sagas';
import reducer from '../Reducers';

// const sagaMiddleware = createSagaMiddleware();

// const middelware = compose(applyMiddleware( sagaMiddleware));

// //  store.dispatch({type: 'GET'})
//  sagaMiddleware.run(rootSaga);

// export default createStore(reducer, middelware);

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export default store