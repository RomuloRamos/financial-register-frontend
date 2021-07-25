import { call,put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadFailure, loadSucces } from "./actions";
import { RepositoriesState } from "./types";

export function* load(){
    try {
        const response:RepositoriesState = yield call(api.get, '/users/RomuloRamos/repos');
        yield put(loadSucces(response.data));
    } catch (error) {
        yield put(loadFailure());
    }
}