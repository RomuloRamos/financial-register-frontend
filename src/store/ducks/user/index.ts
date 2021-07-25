import { Reducer } from 'redux';
import { UserData, UserRegisterTypes, UserState } from './types';


const INITIAL_USER_REGISTER:UserData = {
    login:"",
    name:"",
    birthDate:"",
    email:"",
    password:""
}

const INITIAL_STATE: UserState = {
    data: INITIAL_USER_REGISTER,
    error:false,
    loading:false,
    success: false,
    information:{}
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserRegisterTypes.USER_REGISTER_REQUEST:
            return {
                 ...state, 
                 loading: true,
                 error: false,
                 information:{},
                 success:false, 
                 data:action.payload.data
            };
        
        case UserRegisterTypes.USER_REGISTER_SUCCESS:
            return { 
                ...state,
                success: true, 
                loading: false,
                error: false,
                information:{},
                data: action.payload.data,
            }

        case UserRegisterTypes.USER_REGISTER_FAILURE:
            return {
                ...state,
                success:false,
                loading: false,
                error: true,
                data: INITIAL_USER_REGISTER,
                information:action.payload,
        };

        default:
            return state;
    }
};

export default reducer;
