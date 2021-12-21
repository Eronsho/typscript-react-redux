import {
  DeviceActionTypes,
  DeviceAction,
  FetchDevice,
} from "./../../types/device";
import { Dispatch } from "react";
import { $host } from "../../http";
export const fetchOneDevice = (id: number) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    try {
      dispatch({ type: DeviceActionTypes.FETCH_DEVIECE });
      const { data } = await $host.get("api/device/" + id);
      dispatch({
        type: DeviceActionTypes.FETCH_ONE_DEVIECE_SUCCESSS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: DeviceActionTypes.FETCH_DEVIECE_ERROR,
        payload: "Произошла ошибка при загрузке пользователей",
      });
    }
  };
};
