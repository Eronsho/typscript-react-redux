import { TypeActhion, TypeActionTypes } from "./../../types/types";
import { TypeBrand } from "./../../types/device";
import { call, put, all, takeLatest, takeEvery } from "redux-saga/effects";
import { $host } from "../../http";
import { fetchTypesError, fetchTypesSuccess } from "../action-creators/type";
const getTypes = () => {
  return $host.get<TypeBrand[]>("api/type");
};
function* fetchTypessWorker() {
  try {
    const { data } = yield call(getTypes);
    console.log(data);
    yield put(fetchTypesSuccess(data));
  } catch (e) {
    console.log(e);
    yield put(fetchTypesError("Произошла ошибка при загрузке типов"));
  }
}
export function* fetchTypesWatcher() {
  yield all([takeLatest(TypeActionTypes.FETCH_TYPES, fetchTypessWorker)]);
}
