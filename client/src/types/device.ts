export interface DeviceState {
  device: Device[];
  loading: boolean;
  error: null | string;
  count: number;
  page: number;
}
export interface OneDeviceState {
  oneDevice: Device | null;
}
export interface FetchDevice {
  count: number;
  rows: Device;
}
export interface CreateType {
  name: string;
}
export interface TypeState {
  type: TypeBrand[];
  loading: boolean;
  error: null | string;
}

export interface SelectedTypeState {
  selectedType: TypeBrand;
  loading: boolean;
  error: null | string;
}
export interface SelectedBrandState {
  selectedBrand: TypeBrand;
  loading: boolean;
  error: null | string;
}
export interface TypeBrand {
  id: number | null;
  name: string;
  createdAt: number;
  updatedAt: number;
}
export interface Info {
  number?: number;
  id?: number;
  title: string;
  description: string;
}
export interface Device {
  name: string;
  brandId: number;
  createdAt?: string;
  id: number;
  img: string;
  price: number;
  rating: number;
  typeId: number;
  updatedAt?: string;
  info: Info[];
  repeated?: number;
}
export enum DeviceActionTypes {
  FETCH_DEVIECE = "FETCH_DEVIECE",
  FETCH_DEVIECE_SUCCESSS = "FETCH_DEVIECE_SUCCESSS",
  FETCH_ONE_DEVIECE = "FETCH_ONE_DEVIECE",
  FETCH_ONE_DEVIECE_SUCCESSS = "FETCH_ONE_DEVIECE_SUCCESSS",
  FETCH_DEVIECE_COUNT = "FETCH_DEVIECE_COUNT",
  SET_DEVIECE_PAGE = "SET_DEVIECE_PAGE",
  SET_DEVIECE_PAGE_SUCCESSS = "SET_DEVIECE_PAGE_SUCCESSS",
  FETCH_DEVIECE_ERROR = "FETCH_DEVIECE_ERROR",
  FETCH_TYPES = "FETCH_TYPESE",
  FETCH_TYPES_SUCCESSS = "FETCH_TYPES_SUCCESSS",
  FETCH_TYPES_ERROR = "FETCH_TYPES_ERROR",
}
export interface FetchDevicePayload {
  typeId: number | null | undefined;
  brandId: number | null | undefined;
  page: number | null;
  limit: number;
}

interface FetchDeviceAction {
  type: DeviceActionTypes.FETCH_DEVIECE;
  payload: FetchDevicePayload;
}
interface FetchDeviceSuccsessAction {
  type: DeviceActionTypes.FETCH_DEVIECE_SUCCESSS;
  payload: Device[];
  payloadCount: number;
}
interface FetchOneDeviceAction {
  type: DeviceActionTypes.FETCH_ONE_DEVIECE;
  payload: number;
}
interface FetchOneDeviceSuccsessAction {
  type: DeviceActionTypes.FETCH_ONE_DEVIECE_SUCCESSS;
  payload: Device;
}
interface FetchDeviceSuccsessCount {
  type: DeviceActionTypes.FETCH_DEVIECE_COUNT;
  payload: number;
}
interface FetchDeviceError {
  type: DeviceActionTypes.FETCH_DEVIECE_ERROR;
  payload: string;
}
interface SetDevicePage {
  type: DeviceActionTypes.SET_DEVIECE_PAGE;
  payload: number;
}
interface SetDevicePageSuccsess {
  type: DeviceActionTypes.SET_DEVIECE_PAGE;
  payload: number;
}
export type DeviceAction =
  | FetchDeviceAction
  | FetchDeviceSuccsessAction
  | FetchDeviceError
  | FetchDeviceSuccsessCount
  | SetDevicePage
  | SetDevicePageSuccsess
  | FetchOneDeviceAction
  | FetchOneDeviceSuccsessAction;

// ---------------------------------------------------

// -----------------------------------------------------
