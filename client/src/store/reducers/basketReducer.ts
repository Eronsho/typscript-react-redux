import {
  BasketState,
  BasketActionTypes,
  BasketAction,
} from "./../../types/basket";
const basketState: BasketState = {
  device: [],
  loading: false,
  error: null,
};
export const basketReducer = (
  state = basketState,
  action: BasketAction
): BasketState => {
  switch (action.type) {
    case BasketActionTypes.FETCH_DEVICE_BASKET:
      return {
        loading: true,
        error: null,
        device: [...state.device],
      };
    case BasketActionTypes.FETCH_DEVICE_BASKET_SUCCESSS:
      debugger;
      return {
        loading: false,
        error: null,
        device: [...state.device, action.payload],
      };
    case BasketActionTypes.FETCH_DEVICE_BASKET_ERROR:
      return {
        loading: false,
        error: action.payload,
        device: state.device,
      };
    case BasketActionTypes.DELETE_DEVICE_BASKET_SUCCESSS:
      return {
        loading: false,
        error: null,
        device: state.device.filter((device) => action.payload !== device.id),
      };
    default:
      return state;
  }
};
