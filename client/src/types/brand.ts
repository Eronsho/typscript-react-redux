import { TypeBrand } from "./device";
export interface BrandState {
  brand: TypeBrand[];
  loading: boolean;
  error: null | string;
}
export enum BrandActionTypes {
  FETCH_BRANDS = "FETCH_BRANDS",
  FETCH_BRANDS_SUCCESS = "FETCH_BRANDS_SUCCESS",
  FETCH_BRANDS_ERROR = "FETCH_BRANDS_ERROR",
  SELECTION_BRAND = "SELECTION_BRAND",
  SELECTION_BRAND__ALL = "SELECTION_BRAND__ALL",
  SELECTION_BRAND_SUCCESS = "SELECTION_BRAND_SUCCESS",
  SELECTION_BRAND_ERROR = "SELECTION_BRAND_ERROR",
}
export interface FetchBrandAction {
  type: typeof BrandActionTypes.FETCH_BRANDS;
}
export interface FetchBrandSuccsessAction {
  type: typeof BrandActionTypes.FETCH_BRANDS_SUCCESS;
  payload: TypeBrand[];
}
export interface FetchBrandError {
  type: typeof BrandActionTypes.FETCH_BRANDS_ERROR;
  payload: string;
}
export interface SelectionBrand {
  type: BrandActionTypes.SELECTION_BRAND;
  payload: TypeBrand;
}
export interface SelectionBrandAll {
  type: BrandActionTypes.SELECTION_BRAND__ALL;
}
export interface SelectionBrandSuccess {
  type: BrandActionTypes.SELECTION_BRAND_SUCCESS;
  payload: TypeBrand;
}
export interface SelectionBrandError {
  type: BrandActionTypes.SELECTION_BRAND_ERROR;
  payload: string;
}
export type BrandActhion =
  | FetchBrandAction
  | FetchBrandSuccsessAction
  | FetchBrandError
  | SelectionBrand
  | SelectionBrandAll
  | SelectionBrandSuccess
  | SelectionBrandError;
