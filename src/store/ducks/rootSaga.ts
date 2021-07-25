import {all,takeLatest} from "redux-saga/effects";
import { RepositoriesTypes } from "./repositories/types";
import { load } from "./repositories/sagas";
import { loginFunction } from "./login/sagas";
import { LoginTypes } from "./login/types";
import { UserRegisterTypes } from "./user/types";
import { userRegisterFunction } from "./user/sagas";


export default function* rootSaga(){
    return yield all([
        takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
        takeLatest(LoginTypes.LOGIN_REQUEST, loginFunction),
        takeLatest(UserRegisterTypes.USER_REGISTER_REQUEST, userRegisterFunction),
    ]);
}