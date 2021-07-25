/*
 * Actions Types
 */
export enum UserRegisterTypes {
    USER_REGISTER_REQUEST = '@user/USER_REGISTER_REQUEST',
    USER_REGISTER_SUCCESS = '@user/USER_REGISTER_SUCCESS',
    USER_REGISTER_FAILURE = '@user/USER_REGISTER_FAILURE',

    //Maybe more functions in the future...
}

/**
 * Data Types
 */
export interface UserData{
    name: string;
    login: string;
    email: string;
    birthDate: string;
    password: string;
}

/**
 * State type
 */
export interface UserState {
    readonly data: UserData;
    readonly success: boolean;
    readonly loading: boolean;
    readonly error: boolean;
    readonly information: any;
}
