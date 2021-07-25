import { Reducer } from 'redux';
import { LoginState, LoginStatus, LoginTypes, LoginUser } from './types';


const INITIAL_LOGINUSER:LoginUser = {
    login:"",
    name:"",
    birthDate:"",
    email:"",
    password:""
}

const INITIAL_LOGINSTATUS:LoginStatus = {
    loginUser:INITIAL_LOGINUSER,
    token: ""
}

// const INITIAL_LOGINREQUEST:LoginRequestData = {
//     username: "",
//     password: ""
// }

const INITIAL_STATE: LoginState = {
    // dataToRequest: INITIAL_LOGINREQUEST,
    data: INITIAL_LOGINSTATUS,
    error:false,
    loading:false
};

const reducer: Reducer<LoginState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LoginTypes.LOGIN_REQUEST:
            return { ...state, loading: true, data:action.payload.data};
        
        case LoginTypes.LOGIN_SUCCES:
            return { 
                ...state, 
                loading: false,
                error: false,
                data: action.payload.data,
            }

        case LoginTypes.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                data: INITIAL_LOGINSTATUS,
        };
        case LoginTypes.LOGOUT_REQUEST:
            return {
                ...state,
                loading: false,
                error: false,
                data: INITIAL_LOGINSTATUS
        };

        default:
            return state;
    }
};

export default reducer;
