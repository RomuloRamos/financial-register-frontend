import { action } from 'typesafe-actions';
import { LoginTypes, LoginStatus,LoginUser } from './types';

export const loginRequest = (data:LoginUser) => 
    action(LoginTypes.LOGIN_REQUEST,{data});

export const loginSucces = (data: LoginStatus) =>
    action(LoginTypes.LOGIN_SUCCES, {data});

export const loginFailure = () => action(LoginTypes.LOGIN_FAILURE);

export const logoutRequest = () => action(LoginTypes.LOGOUT_REQUEST);

// export const logoutSucces = (data: LoginStatus) =>
//     action(LoginTypes.LOGOUT_SUCCES, {data});

// export const logoutFailure = () => action(LoginTypes.LOGOUT_FAILURE);
