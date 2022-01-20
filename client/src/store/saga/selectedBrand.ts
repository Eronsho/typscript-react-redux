import { TypeBrand } from "./../../types/device";
import { call, put, all, takeLatest, takeEvery } from "redux-saga/effects";
import {
  fetchBrandsSuccess,
  fetchBrandsError,
  selectedBrandSuccess,
  selectedBrandError,
} from "./../action-creators/brand";
import { BrandActionTypes } from "../../types/brand";

function* selectedBrandWorker(action: any) {
  try {
    yield put(selectedBrandSuccess(action.payload));
  } catch (e) {
    yield put(selectedBrandError("Error selected brand"));
  }
}
export function* selectedBrandWatcher() {
  yield all([
    takeLatest(BrandActionTypes.SELECTION_BRAND, selectedBrandWorker),
  ]);
}
