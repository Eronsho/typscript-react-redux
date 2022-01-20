import { BasketActionTypes } from "./../../types/basket";
import { Dispatch } from "react";
import { BasketAction } from "../../types/basket";
import { Device } from "../../types/device";

export const addDeviceBasket = (payload: Device) => ({
  type: BasketActionTypes.FETCH_DEVICE_BASKET,
  payload,
});
export const addDeviceBasketsuccess = (payload: Device) => ({
  type: BasketActionTypes.FETCH_DEVICE_BASKET_SUCCESSS,
  payload,
});
export const addDeviceBasketError = (payload: string) => ({
  type: BasketActionTypes.FETCH_DEVICE_BASKET_ERROR,
  payload,
});

export const deleteDeviceBasket = (payload: number) => ({
  type: BasketActionTypes.DELETE_DEVICE_BASKET,
  payload,
});
export const deleteDeviceBasketSuccess = (payload: number) => ({
  type: BasketActionTypes.DELETE_DEVICE_BASKET_SUCCESSS,
  payload,
});
