import {
  BrandActhion,
  BrandActionTypes,
  TypeBrand,
} from "./../../types/device";
import { Dispatch } from "react";
import { $host } from "../../http";
export const fetcBrand = () => {
  return async (dispatch: Dispatch<BrandActhion>) => {
    try {
      dispatch({ type: BrandActionTypes.FETCH_BRANDS });
      const { data } = await $host.get("api/brand");
      dispatch({ type: BrandActionTypes.FETCH_BRANDS_SUCCESS, payload: data });
    } catch (e) {
      dispatch({
        type: BrandActionTypes.FETCH_BRANDS_ERROR,
        payload: "Произошла ошибка при загрузке типов",
      });
    }
  };
};
export const selectedBrands = (brand: TypeBrand) => {
  return async (dispatch: Dispatch<BrandActhion>) => {
    try {
      dispatch({
        type: BrandActionTypes.SELECTION_BRAND_SUCCESS,
        payload: brand,
      });
    } catch (e) {
      dispatch({
        type: BrandActionTypes.SELECTION_BRAND_ERROR,
        payload: "Ощибка",
      });
    }
  };
};
export const selectedBrandsAll = () => {
  return async (dispatch: Dispatch<BrandActhion>) => {
    const all: TypeBrand = {
      id: null,
      name: "все",
      createdAt: 1,
      updatedAt: 1,
    };
    try {
      dispatch({
        type: BrandActionTypes.SELECTION_BRAND_SUCCESS,
        payload: all,
      });
    } catch (e) {
      dispatch({
        type: BrandActionTypes.SELECTION_BRAND_ERROR,
        payload: "Ощибка",
      });
    }
  };
};
