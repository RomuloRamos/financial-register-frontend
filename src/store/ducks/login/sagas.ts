import { AxiosResponse } from "axios";
import { call,put } from "redux-saga/effects";
import api from "../../../services/api";
import { loginFailure, loginSucces } from "./actions";
import { LoginUser } from "./types";

export function* loginFunction(action){
    
    console.log("Sagas loginFunction: ",action);
    const {login, password} = action.payload.data;
    const data = {
        login,
        password
    };
    try {
      let jsonResponse:AxiosResponse = yield call(api.post,'/api/v1/auth',data);
      console.log("jsonResponse: ", jsonResponse.data);
      yield put(loginSucces(jsonResponse.data));
    } catch (error) {
      console.log(error);
      yield put(loginFailure());
    }
}