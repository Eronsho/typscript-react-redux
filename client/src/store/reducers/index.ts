import { basketReducer } from "./basketReducer";
import { userReducer } from "./userReducer";
import {
  brandReducer,
  deviceReducer,
  typeReducer,
  selectedTypeReducer,
  selectedBrandReducer,
  oneDeviceReducer,
} from "./deviceReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  device: deviceReducer,
  type: typeReducer,
  brand: brandReducer,
  brandId: selectedBrandReducer,
  typeId: selectedTypeReducer,
  user: userReducer,
  backet: basketReducer,
  oneDevice: oneDeviceReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
