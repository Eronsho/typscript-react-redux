import { Device } from "./device";

export interface BasketState {
  device: Device[];
  loading: boolean;
  error: null | string;
}
export enum BasketActionTypes {
  FETCH_DEVICE_BASKET = "FETCH_DEVICE_BASKET",
  FETCH_DEVICE_BASKET_SUCCESSS = "FETCH_DEVICE_BASKET_SUCCESSS",
  FETCH_DEVICE_BASKET_ERROR = "FETCH_DEVICE_BASKET_ERROR",
  DELETE_DEVICE_BASKET = "DELETE_DEVICE_BASKET",
  DELETE_DEVICE_BASKET_SUCCESSS = "DELETE_DEVICE_BASKET_SUCCESSS",
}
interface FetchDeviceBasketAction {
  type: BasketActionTypes.FETCH_DEVICE_BASKET;
  payload: Device;
}
interface FetchDeviceBasketSuccsessAction {
  type: BasketActionTypes.FETCH_DEVICE_BASKET_SUCCESSS;
  payload: Device;
}
interface FetchDeviceBasketError {
  type: BasketActionTypes.FETCH_DEVICE_BASKET_ERROR;
  payload: string;
}
interface DeleteDeviceBasket {
  type: BasketActionTypes.DELETE_DEVICE_BASKET;
  payload: number;
}
interface DeleteDeviceBasketSuccess {
  type: BasketActionTypes.DELETE_DEVICE_BASKET_SUCCESSS;
  payload: number;
}

export type BasketAction =
  | FetchDeviceBasketAction
  | FetchDeviceBasketSuccsessAction
  | FetchDeviceBasketError
  | DeleteDeviceBasketSuccess
  | DeleteDeviceBasket;
