import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import cartsReducer from './slice/cartSlice';
import authReducer from './slice/authSlice';
import rootSaga from './rootSaga';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import infosReducer from './slice/infoSlice';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});

const rootReducer = combineReducers({
  router: routerReducer,
  carts: cartsReducer,
  auth: authReducer,
  info: infosReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware),
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
export default store;
