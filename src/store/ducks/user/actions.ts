import { action } from 'typesafe-actions';
import { UserRegisterTypes, UserData,UserState } from './types';

export const userRegisterRequest = (data:UserData) => 
    action(UserRegisterTypes.USER_REGISTER_REQUEST,{data});

export const userRegisterSuccess = (data: UserData) =>
    action(UserRegisterTypes.USER_REGISTER_SUCCESS, {data});

export const userRegisterFailure = (information:any) => action(UserRegisterTypes.USER_REGISTER_FAILURE,information);

