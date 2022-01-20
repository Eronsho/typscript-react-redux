import { all, fork } from "redux-saga/effects";
import { delethDeviceBasketWatcher } from "./basket";
import { fetchBrandsWatcher } from "./brands";
import { fetchDeviceWatcher } from "./device";
import { selectedBrandWatcher } from "./selectedBrand";
import { selectedTypeWatcher } from "./selectedType";
import { fetchTypesWatcher } from "./type";
import { addUserfWatcher } from "./user";

export function* rootWatcher() {
  yield all([
    fork(fetchBrandsWatcher),
    fork(fetchTypesWatcher),
    fork(fetchDeviceWatcher),
    fork(selectedBrandWatcher),
    fork(selectedTypeWatcher),
    fork(addUserfWatcher),
    fork(delethDeviceBasketWatcher),
  ]);
}
