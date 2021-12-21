import { BasketActionTypes } from "./../../types/basket";
import { Dispatch } from "react";
import { BasketAction } from "../../types/basket";
import { Device } from "../../types/device";

export const addDeviceBasket = (device: Device) => {
  return async (dispatch: Dispatch<BasketAction>) => {
    try {
      dispatch({ type: BasketActionTypes.FETCH_DEVICE_BASKET });
      dispatch({
        type: BasketActionTypes.FETCH_DEVICE_BASKET_SUCCESSS,
        payload: device,
      });
    } catch (error) {
      dispatch({
        type: BasketActionTypes.FETCH_DEVICE_BASKET_ERROR,
        payload: "Ощибка при закрузеи карзины",
      });
    }
  };
};
export const deleteDeviceBasket = (deviceId: number) => {
  return async (dispatch: Dispatch<BasketAction>) => {
    dispatch({
      type: BasketActionTypes.DELETE_DEVICE_BASKET,
      payload: deviceId,
    });
  };
};
