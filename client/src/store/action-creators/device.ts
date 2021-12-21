import {
  DeviceActionTypes,
  DeviceAction,
  FetchDevice,
} from "./../../types/device";
import { Dispatch } from "react";
import { $host } from "../../http";
export const fetchDevice = (
  typeId: number | null | undefined,
  brandId: number | null | undefined,
  page: number | null,
  limit: number
) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    try {
      dispatch({ type: DeviceActionTypes.FETCH_DEVIECE });
      const { data } = await $host.get("api/device", {
        params: {
          typeId,
          brandId,
          page,
          limit,
        },
      });
      const { rows, count } = data;
      dispatch({
        type: DeviceActionTypes.FETCH_DEVIECE_SUCCESSS,
        payload: rows,
        payloadCount: count,
      });
    } catch (e) {
      dispatch({
        type: DeviceActionTypes.FETCH_DEVIECE_ERROR,
        payload: "Произошла ошибка при загрузке пользователей",
      });
    }
  };
};
export const setPageDevice = (page: number) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    dispatch({ type: DeviceActionTypes.SET_DEVIECE_PAGE, payload: page });
  };
};
