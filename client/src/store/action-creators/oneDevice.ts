import {
  DeviceActionTypes,
  DeviceAction,
  FetchDevice,
  Device,
} from "./../../types/device";
import { Dispatch } from "react";
import { $host } from "../../http";
export const fetchOneDeviceSuccess = (payload: Device[]) => ({
  type: DeviceActionTypes.FETCH_ONE_DEVIECE_SUCCESSS,
  payload,
});
export const fetchOneDeviceRequest = (payload: number) => ({
  type: DeviceActionTypes.FETCH_ONE_DEVIECE,
  payload,
});
export const fetchOneDeviceError = (payload: string) => ({
  type: DeviceActionTypes.FETCH_DEVIECE_ERROR,
  payload,
});
