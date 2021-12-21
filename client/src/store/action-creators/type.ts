import { TypeActhion, TypeActionTypes, TypeBrand } from "./../../types/device";
import { Dispatch } from "react";
import { $host } from "../../http";
export const fetchType = () => {
  return async (dispatch: Dispatch<TypeActhion>) => {
    try {
      dispatch({ type: TypeActionTypes.FETCH_TYPES });
      const { data } = await $host.get("api/type");
      dispatch({ type: TypeActionTypes.FETCH_TYPES_SUCCESSS, payload: data });
    } catch (e) {
      dispatch({
        type: TypeActionTypes.FETCH_TYPES_ERROR,
        payload: "Произошла ошибка при загрузке типов",
      });
    }
  };
};
export const selectedTypes = (type: TypeBrand) => {
  return async (dispatch: Dispatch<TypeActhion>) => {
    try {
      dispatch({
        type: TypeActionTypes.SELECTION_TYPE_SUCCESS,
        payload: type,
      });
    } catch (e) {
      dispatch({
        type: TypeActionTypes.SELECTION_TYPE_ERROR,
        payload: "Ощибка",
      });
    }
  };
};
export const selectedTypesAll = () => {
  return async (dispatch: Dispatch<TypeActhion>) => {
    const all: TypeBrand = {
      id: null,
      name: "все",
      createdAt: 1,
      updatedAt: 1,
    };
    try {
      dispatch({
        type: TypeActionTypes.SELECTION_TYPE_SUCCESS,
        payload: all,
      });
    } catch (e) {
      dispatch({
        type: TypeActionTypes.SELECTION_TYPE_ERROR,
        payload: "Ощибка",
      });
    }
  };
};
