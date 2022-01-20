import { TypeBrand } from "./device";

export enum TypeActionTypes {
  FETCH_TYPES = "FETCH_TYPESE",
  FETCH_TYPES_SUCCESSS = "FETCH_TYPES_SUCCESSS",
  FETCH_TYPES_ERROR = "FETCH_TYPES_ERROR",
  SELECTION_TYPE = "SELECTION_TYPE",
  SELECTION_TYPE_SUCCESS = "SELECTION_TYPE_SUCCESS",
  SELECTION_TYPE_ERROR = "SELECTION_TYPE_ERROR",
}

export interface FetchTypeAction {
  type: typeof TypeActionTypes.FETCH_TYPES;
}
export interface FetchTypeSuccsessAction {
  type: typeof TypeActionTypes.FETCH_TYPES_SUCCESSS;
  payload: TypeBrand[];
}
export interface FetchTypeError {
  type: typeof TypeActionTypes.FETCH_TYPES_ERROR;
  payload: string;
}
export interface SelectionType {
  type: TypeActionTypes.SELECTION_TYPE;
  payload: TypeBrand;
}
export interface SelectionTypeSuccess {
  type: TypeActionTypes.SELECTION_TYPE_SUCCESS;
  payload: TypeBrand;
}
export interface SelectionTypeError {
  type: TypeActionTypes.SELECTION_TYPE_ERROR;
  payload: string;
}

export type TypeActhion =
  | FetchTypeAction
  | FetchTypeSuccsessAction
  | FetchTypeError
  | SelectionType
  | SelectionTypeSuccess
  | SelectionTypeError;
