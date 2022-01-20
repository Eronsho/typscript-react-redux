import {
  Device,
  OneDeviceState,
  SelectedBrandState,
  SelectedTypeState,
  TypeState,
} from "./../../types/device";
import {
  DeviceAction,
  DeviceActionTypes,
  DeviceState,
} from "../../types/device";
import { BrandActhion, BrandActionTypes, BrandState } from "../../types/brand";
import { TypeActhion, TypeActionTypes } from "../../types/types";

const deviceState: DeviceState = {
  device: [],
  loading: false,
  error: null,
  count: 1,
  page: 1,
};
const oneDeviceState: OneDeviceState = {
  oneDevice: null,
};
const brandState: BrandState = {
  brand: [],
  loading: false,
  error: null,
};
const typeState: TypeState = {
  type: [],
  loading: false,
  error: null,
};
const selectedTypesState: SelectedTypeState = {
  selectedType: {
    id: null,
    name: "все",
    createdAt: 1,
    updatedAt: 1,
  },
  loading: false,
  error: null,
};
const selectedBrandsState: SelectedBrandState = {
  selectedBrand: {
    id: null,
    name: "все",
    createdAt: 1,
    updatedAt: 1,
  },
  loading: false,
  error: null,
};

export const deviceReducer = (
  state = deviceState,
  action: DeviceAction
): DeviceState => {
  switch (action.type) {
    case DeviceActionTypes.FETCH_DEVIECE:
      return {
        loading: true,
        error: null,
        device: state.device,
        count: state.count,
        page: state.page,
      };
    case DeviceActionTypes.FETCH_DEVIECE_SUCCESSS:
      return {
        loading: false,
        error: null,
        device: [...action.payload],
        count: action.payloadCount,
        page: state.page,
      };
    case DeviceActionTypes.FETCH_DEVIECE_ERROR:
      return {
        loading: false,
        error: action.payload,
        device: state.device,
        count: state.count,
        page: state.page,
      };

    case DeviceActionTypes.SET_DEVIECE_PAGE:
      return {
        loading: false,
        error: null,
        device: state.device,
        count: state.count,
        page: action.payload,
      };

    default:
      return state;
  }
};
export const oneDeviceReducer = (
  state = oneDeviceState,
  action: DeviceAction
): OneDeviceState => {
  switch (action.type) {
    case DeviceActionTypes.FETCH_DEVIECE:
      return {
        oneDevice: null,
      };
    case DeviceActionTypes.FETCH_ONE_DEVIECE_SUCCESSS:
      return {
        oneDevice: (state.oneDevice = action.payload),
      };

    default:
      return state;
  }
};
export const typeReducer = (
  state = typeState,
  action: TypeActhion
): TypeState => {
  switch (action.type) {
    case TypeActionTypes.FETCH_TYPES:
      return {
        loading: true,
        error: null,
        type: state.type,
      };
    case TypeActionTypes.FETCH_TYPES_SUCCESSS:
      return {
        loading: false,
        error: null,
        type: [...action.payload],
      };
    case TypeActionTypes.FETCH_TYPES_ERROR:
      return {
        loading: false,
        error: action.payload,
        type: state.type,
      };
    default:
      return state;
  }
};
export const selectedTypeReducer = (
  state = selectedTypesState,
  action: TypeActhion
): SelectedTypeState => {
  switch (action.type) {
    case TypeActionTypes.SELECTION_TYPE_SUCCESS:
      return {
        loading: false,
        error: null,
        selectedType: action.payload,
      };
    case TypeActionTypes.SELECTION_TYPE_ERROR:
      return {
        loading: false,
        error: action.payload,
        selectedType: state.selectedType,
      };
    default:
      return state;
  }
};

export const brandReducer = (
  state = brandState,
  action: BrandActhion
): BrandState => {
  switch (action.type) {
    case BrandActionTypes.FETCH_BRANDS:
      return {
        ...state,
        loading: true,
        error: null,
        brand: state.brand,
      };
    case BrandActionTypes.FETCH_BRANDS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        brand: action.payload,
      };
    case BrandActionTypes.FETCH_BRANDS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        brand: state.brand,
      };

    default:
      return state;
  }
};
export const selectedBrandReducer = (
  state = selectedBrandsState,
  action: BrandActhion
): SelectedBrandState => {
  switch (action.type) {
    case BrandActionTypes.SELECTION_BRAND_SUCCESS:
      return {
        loading: false,
        error: null,
        selectedBrand: action.payload,
      };
    case BrandActionTypes.SELECTION_BRAND_ERROR:
      return {
        loading: false,
        error: action.payload,
        selectedBrand: state.selectedBrand,
      };
    default:
      return state;
  }
};
