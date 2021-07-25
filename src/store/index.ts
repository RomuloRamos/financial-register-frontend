import { createStore, applyMiddleware, Store,compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { LoginState } from './ducks/login/types';
import { RepositoriesState } from './ducks/repositories/types';
import { UserState } from './ducks/user/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
    login: LoginState,
    repositories: RepositoriesState,
    userRegister: UserState
}

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store: Store<ApplicationState> = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
