import {
  DeviceActionTypes,
  FetchDevicePayload,
  TypeBrand,
} from "./../../types/device";
import {
  call,
  put,
  all,
  takeLatest,
  takeEvery,
  take,
} from "redux-saga/effects";
import { $host } from "../../http";
import {
  fetchDeviceError,
  fetchDeviceSuccess,
  setPageDeviceSuccess,
} from "../action-creators/device";
import {
  fetchOneDeviceError,
  fetchOneDeviceSuccess,
} from "../action-creators/oneDevice";

const fetchDevice = (param: FetchDevicePayload) => {
  return $host.get("api/device", {
    params: param,
  });
};
const fetchOneDevice = (id: number) => {
  return $host.get("api/device/" + id);
};
function* fetchDeviceWorker(action: any) {
  try {
    const { data } = yield call(fetchDevice, action.payload);
    yield put(fetchDeviceSuccess(data.rows, data.count));
  } catch (e) {
    yield put(fetchDeviceError("Произошла ошибка при загрузке типов"));
  }
}
function* setPageDeviceeWorker(action: any) {
  yield put(setPageDeviceSuccess(action.payload));
}
function* fetchOneDeviceWorker(action: any) {
  try {
    const { data } = yield call(fetchOneDevice, action.payload);
    console.log(data);
    yield put(fetchOneDeviceSuccess(data));
  } catch (e) {
    console.log(e);
    yield put(fetchOneDeviceError("Произошла ошибка при загрузке типов"));
  }
}
export function* fetchDeviceWatcher() {
  yield all([
    takeLatest(DeviceActionTypes.FETCH_DEVIECE, fetchDeviceWorker),
    takeLatest(DeviceActionTypes.SET_DEVIECE_PAGE, setPageDeviceeWorker),
    takeLatest(DeviceActionTypes.FETCH_ONE_DEVIECE, fetchOneDeviceWorker),
  ]);
}
