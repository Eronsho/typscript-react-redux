import jwt_decode from "jwt-decode";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { $host } from "../../http";

import { UserActionTypes, UserPayload } from "../../types/user";
import { addUseerError, addUseerSuccess } from "../action-creators/user";

const addUser = (params: UserPayload) => {
  return $host.post<any>("api/user/registration", params);
};
const addLoginUser = (params: UserPayload) => {
  return $host.post<any>("api/user/login", params);
};
function* addUsereWorker(action: any) {
  try {
    debugger;
    const { data } = yield call(addUser, action.payload);
    yield localStorage.setItem("token", data.token);
    yield put(addUseerSuccess(jwt_decode(data.token)));
  } catch (e) {
    console.log(e);
    yield put(addUseerError("Произошла ошибка при загрузке типов"));
  }
}
function* addLoginUsereWorker(action: any) {
  try {
    debugger;
    const { data } = yield call(addLoginUser, action.payload);
    yield localStorage.setItem("token", data.token);
    yield put(addUseerSuccess(jwt_decode(data.token)));
  } catch (e) {
    console.log(e);
    yield put(addUseerError("Произошла ошибка при загрузке типов"));
  }
}
function* logOutnUsereWorker() {
  try {
    debugger;

    yield put(addUseerSuccess(null));
  } catch (e) {
    console.log(e);
    yield put(addUseerError("Произошла ошибка при загрузке типов"));
  }
}
export function* addUserfWatcher() {
  yield all([
    takeLatest(UserActionTypes.ADD_USER, addUsereWorker),
    takeLatest(UserActionTypes.FETCH_USER, addLoginUsereWorker),
    takeLatest(UserActionTypes.LOG_OUT_USER, logOutnUsereWorker),
  ]);
}
