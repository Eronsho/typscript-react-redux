import { call, put, all, takeLatest } from "redux-saga/effects";
import { $host } from "../../http";
import { BasketActionTypes } from "../../types/basket";
import {
  addDeviceBasketError,
  addDeviceBasketsuccess,
  deleteDeviceBasketSuccess,
} from "../action-creators/basket";
function* deletDeviceBasketWorker(action: any) {
  try {
    yield put(deleteDeviceBasketSuccess(action.payload));
  } catch (e) {
    console.log(e);
  }
}
function* addDeviceBasketWorker(action: any) {
  debugger;
  try {
    yield put(addDeviceBasketsuccess(action.payload));
  } catch (e) {
    yield put(addDeviceBasketError("erroe delet basket"));
  }
}
export function* delethDeviceBasketWatcher() {
  yield all([
    takeLatest(BasketActionTypes.FETCH_DEVICE_BASKET, addDeviceBasketWorker),
    takeLatest(BasketActionTypes.DELETE_DEVICE_BASKET, deletDeviceBasketWorker),
  ]);
}
