import { AxiosResponse } from "axios";
import { call,put } from "redux-saga/effects";
import api from "../../../services/api";
import { userRegisterFailure, userRegisterSuccess } from "./actions";
import { UserData, UserState } from "./types";


const userRegister_async = async (userData:UserData) => {
  const result = await api.post('/api/v1/user', userData)
  .then(response=>{
    console.log("ASYNC TEST SUCCESS: ",response);
    return response;
  })
  .catch((err)=>{
    console.log("ASYNC TEST ERROR: ",err.response.data);
    return err.response.data;
  })

  return result;
}

export function* userRegisterFunction(action){
    
  const userData:UserData = action.payload.data;
    console.log("Sagas userRegisterFunction: ",userData);
    try {
      let jsonResponse:AxiosResponse = yield call(api.post,'/api/v1/user',userData);
      console.log("jsonResponse: ", jsonResponse.data);
      yield put(userRegisterSuccess(jsonResponse.data));
    } catch (error) {
      console.log(error.response.data);
      yield put(userRegisterFailure(error.response.data));
    }
}