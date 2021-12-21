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
export interface BrandState {
  brand: TypeBrand[];
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
  FETCH_ONE_DEVIECE_SUCCESSS = "FETCH_ONE_DEVIECE_SUCCESSS",

  FETCH_DEVIECE_COUNT = "FETCH_DEVIECE_COUNT",
  SET_DEVIECE_PAGE = "SET_DEVIECE_PAGE",
  FETCH_DEVIECE_ERROR = "FETCH_DEVIECE_ERROR",
  FETCH_TYPES = "FETCH_TYPESE",
  FETCH_TYPES_SUCCESSS = "FETCH_TYPES_SUCCESSS",
  FETCH_TYPES_ERROR = "FETCH_TYPES_ERROR",
}

interface FetchDeviceAction {
  type: DeviceActionTypes.FETCH_DEVIECE;
}
interface FetchDeviceSuccsessAction {
  type: DeviceActionTypes.FETCH_DEVIECE_SUCCESSS;
  payload: Device[];
  payloadCount: number;
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
export type DeviceAction =
  | FetchDeviceAction
  | FetchDeviceSuccsessAction
  | FetchDeviceError
  | FetchDeviceSuccsessCount
  | SetDevicePage
  | FetchOneDeviceSuccsessAction;
export enum TypeActionTypes {
  FETCH_TYPES = "FETCH_TYPESE",
  FETCH_TYPES_SUCCESSS = "FETCH_TYPES_SUCCESSS",
  FETCH_TYPES_ERROR = "FETCH_TYPES_ERROR",
  SELECTION_TYPE_SUCCESS = "SELECTION_TYPE_SUCCESS",
  SELECTION_TYPE_ERROR = "SELECTION_TYPE_ERROR",
}

interface FetchTypeAction {
  type: TypeActionTypes.FETCH_TYPES;
}
interface FetchTypeSuccsessAction {
  type: TypeActionTypes.FETCH_TYPES_SUCCESSS;
  payload: TypeBrand[];
}
interface FetchTypeError {
  type: TypeActionTypes.FETCH_TYPES_ERROR;
  payload: string;
}
interface SelectionTypeSuccess {
  type: TypeActionTypes.SELECTION_TYPE_SUCCESS;
  payload: TypeBrand;
}
interface SelectionTypeError {
  type: TypeActionTypes.SELECTION_TYPE_ERROR;
  payload: string;
}

export type TypeActhion =
  | FetchTypeAction
  | FetchTypeSuccsessAction
  | FetchTypeError
  | SelectionTypeSuccess
  | SelectionTypeError;
// ---------------------------------------------------
export enum BrandActionTypes {
  FETCH_BRANDS = "FETCH_BRANDS",
  FETCH_BRANDS_SUCCESS = "FETCH_BRANDS_SUCCESS",
  FETCH_BRANDS_ERROR = "FETCH_BRANDS_ERROR",
  SELECTION_BRAND_SUCCESS = "SELECTION_BRAND_SUCCESS",
  SELECTION_BRAND_ERROR = "SELECTION_BRAND_ERROR",
}

interface FetchBrandAction {
  type: BrandActionTypes.FETCH_BRANDS;
}
interface FetchBrandSuccsessAction {
  type: BrandActionTypes.FETCH_BRANDS_SUCCESS;
  payload: TypeBrand[];
}
interface FetchBrandError {
  type: BrandActionTypes.FETCH_BRANDS_ERROR;
  payload: string;
}
interface SelectionBrandSuccess {
  type: BrandActionTypes.SELECTION_BRAND_SUCCESS;
  payload: TypeBrand;
}
interface SelectionBrandError {
  type: BrandActionTypes.SELECTION_BRAND_ERROR;
  payload: string;
}
export type BrandActhion =
  | FetchBrandAction
  | FetchBrandSuccsessAction
  | FetchBrandError
  | SelectionBrandSuccess
  | SelectionBrandError;
// -----------------------------------------------------
