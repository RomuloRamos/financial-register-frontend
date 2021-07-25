import { combineReducers } from 'redux';

import login from './login';
import repositories from './repositories';
import userRegister from './user';

export default combineReducers({
    repositories,
    login,
    userRegister
});
