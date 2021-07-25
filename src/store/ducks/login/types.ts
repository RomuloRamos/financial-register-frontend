/*
 * Actions Types
 */
export enum LoginTypes {
    LOGIN_REQUEST = '@login/LOGIN_REQUEST',
    LOGIN_SUCCES = '@login/LOGIN_SUCCES',
    LOGIN_FAILURE = '@login/LOGIN_FAILURE',
    LOGOUT_REQUEST = '@login/LOGOUT_REQUEST',
    LOGOUT_SUCCES = '@login/LOGOUT_SUCCES',
    LOGOUT_FAILURE = '@login/LOGOUT_FAILURE',
}

/**
 * Data Types
 */
//  export interface LoginRequestData{
//     username: string;
//     password: string;
// }

/**
 * Data Types
 */
export interface LoginUser{
    name: string;
    login: string;
    email: string;
    birthDate: string;
    password: string;
}

/**
 * Data Types
 */
export interface LoginStatus {
    loginUser: LoginUser;
    token: string;
}

/**
 * State type
 */
export interface LoginState {
    // readonly dataToRequest: LoginRequestData;
    readonly data: LoginStatus;
    readonly loading: boolean;
    readonly error: boolean;
}
