import { TypeBrand } from "./../../types/device";
import { call, put, all, takeLatest, takeEvery } from "redux-saga/effects";
import { TypeActionTypes } from "../../types/types";
import {
  selectedTypesError,
  selectedTypesSuccess,
} from "../action-creators/type";

function* selectedTypeWorker(action: any) {
  try {
    yield put(selectedTypesSuccess(action.payload));
  } catch (e) {
    yield put(selectedTypesError("Error selected brand"));
  }
}
export function* selectedTypeWatcher() {
  yield all([takeLatest(TypeActionTypes.SELECTION_TYPE, selectedTypeWorker)]);
}
