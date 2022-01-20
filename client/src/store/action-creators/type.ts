import { TypeBrand } from "./../../types/device";
import { Dispatch } from "react";
import { $host } from "../../http";
import {
  SelectionTypeError,
  SelectionType,
  SelectionTypeSuccess,
  TypeActhion,
  TypeActionTypes,
} from "../../types/types";
export const fetchTypesRequest = () => ({
  type: TypeActionTypes.FETCH_TYPES,
});
export const fetchTypesSuccess = (payload: TypeBrand[]) => ({
  type: TypeActionTypes.FETCH_TYPES_SUCCESSS,
  payload,
});
export const fetchTypesError = (payload: string) => ({
  type: TypeActionTypes.FETCH_TYPES_ERROR,
  payload,
});
export const selectedTypes = (payload: TypeBrand): SelectionType => ({
  type: TypeActionTypes.SELECTION_TYPE,
  payload,
});
export const selectedTypesSuccess = (
  payload: TypeBrand
): SelectionTypeSuccess => ({
  type: TypeActionTypes.SELECTION_TYPE_SUCCESS,
  payload,
});
export const selectedTypesError = (payload: string): SelectionTypeError => ({
  type: TypeActionTypes.SELECTION_TYPE_ERROR,
  payload,
});
// export const fetchType = () => {
//   return async (dispatch: Dispatch<TypeActhion>) => {
//     try {
//       dispatch({ type: TypeActionTypes.FETCH_TYPES });
//       const { data } = await $host.get("api/type");
//       dispatch({ type: TypeActionTypes.FETCH_TYPES_SUCCESSS, payload: data });
//     } catch (e) {
//       dispatch({
//         type: TypeActionTypes.FETCH_TYPES_ERROR,
//         payload: "Произошла ошибка при загрузке типов",
//       });
//     }
//   };
// };
// export const selectedTypes = (type: TypeBrand) => {
//   return async (dispatch: Dispatch<TypeActhion>) => {
//     try {
//       dispatch({
//         type: TypeActionTypes.SELECTION_TYPE_SUCCESS,
//         payload: type,
//       });
//     } catch (e) {
//       dispatch({
//         type: TypeActionTypes.SELECTION_TYPE_ERROR,
//         payload: "Ощибка",
//       });
//     }
//   };
// };
// export const selectedTypesAll = () => {
//   return async (dispatch: Dispatch<TypeActhion>) => {
//     const all: TypeBrand = {
//       id: null,
//       name: "все",
//       createdAt: 1,
//       updatedAt: 1,
//     };
//     try {
//       dispatch({
//         type: TypeActionTypes.SELECTION_TYPE_SUCCESS,
//         payload: all,
//       });
//     } catch (e) {
//       dispatch({
//         type: TypeActionTypes.SELECTION_TYPE_ERROR,
//         payload: "Ощибка",
//       });
//     }
//   };
// };
