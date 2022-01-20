import {
  DeviceActionTypes,
  DeviceAction,
  Device,
  FetchDevicePayload,
} from "./../../types/device";
import { Dispatch } from "react";
import { $host } from "../../http";
export const fetchDeviceSuccess = (
  payload: Device[],
  payloadCount: number
) => ({
  type: DeviceActionTypes.FETCH_DEVIECE_SUCCESSS,
  payload,
  payloadCount,
});
export const fetchDeviceRequest = (payload: FetchDevicePayload) => ({
  type: DeviceActionTypes.FETCH_DEVIECE,
  payload,
});
export const fetchDeviceError = (payload: string) => ({
  type: DeviceActionTypes.FETCH_DEVIECE_ERROR,
  payload,
});

export const setPageDevice = (payload: number) => ({
  type: DeviceActionTypes.SET_DEVIECE_PAGE,
  payload,
});
export const setPageDeviceSuccess = (payload: number) => ({
  type: DeviceActionTypes.SET_DEVIECE_PAGE_SUCCESSS,
  payload,
});
