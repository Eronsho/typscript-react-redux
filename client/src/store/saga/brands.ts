import { TypeBrand } from "./../../types/device";
import { call, put, all, takeLatest, takeEvery } from "redux-saga/effects";
import {
  fetchBrandsSuccess,
  fetchBrandsError,
} from "./../action-creators/brand";
import { $host } from "../../http";
import { BrandActionTypes } from "../../types/brand";
const getBrands = () => {
  return $host.get<TypeBrand[]>("api/brand");
};
function* fetchBrandsWorker() {
  try {
    const { data } = yield call(getBrands);
    console.log(data);
    yield put(fetchBrandsSuccess(data));
  } catch (e) {
    console.log(e);
    yield put(fetchBrandsError("Произошла ошибка при загрузке типов"));
  }
}
export function* fetchBrandsWatcher() {
  yield all([takeLatest(BrandActionTypes.FETCH_BRANDS, fetchBrandsWorker)]);
}
