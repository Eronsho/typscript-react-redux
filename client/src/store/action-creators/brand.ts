import { TypeBrand } from "./../../types/device";

import { Dispatch } from "react";
import { $host } from "../../http";
import {
  BrandActhion,
  BrandActionTypes,
  FetchBrandAction,
  FetchBrandError,
  FetchBrandSuccsessAction,
  SelectionBrand,
  SelectionBrandAll,
  SelectionBrandSuccess,
} from "../../types/brand";
export const fetchBrandsRequest = (): FetchBrandAction => ({
  type: BrandActionTypes.FETCH_BRANDS,
});
export const fetchBrandsSuccess = (
  payload: TypeBrand[]
): FetchBrandSuccsessAction => ({
  type: BrandActionTypes.FETCH_BRANDS_SUCCESS,
  payload,
});
export const fetchBrandsError = (payload: string): FetchBrandError => ({
  type: BrandActionTypes.FETCH_BRANDS_ERROR,
  payload,
});
export const selectedBrands = (payload: TypeBrand): SelectionBrand => ({
  type: BrandActionTypes.SELECTION_BRAND,
  payload,
});

export const selectedBrandSuccess = (
  payload: TypeBrand
): SelectionBrandSuccess => ({
  type: BrandActionTypes.SELECTION_BRAND_SUCCESS,
  payload,
});
export const selectedBrandError = (payload: string) => ({
  type: BrandActionTypes.FETCH_BRANDS_ERROR,
  payload,
});
// export const fetcBrand = () => {
//   return async (dispatch: Dispatch<BrandActhion>) => {
//     try {
//       dispatch({ type: BrandActionTypes.FETCH_BRANDS });
//       const { data } = await $host.get("api/brand");
//       dispatch({ type: BrandActionTypes.FETCH_BRANDS_SUCCESS, payload: data });
//     } catch (e) {
//       dispatch({
//         type: BrandActionTypes.FETCH_BRANDS_ERROR,
//         payload: "Произошла ошибка при загрузке типов",
//       });
//     }
//   };
// };
// export const selectedBrands = (brand: TypeBrand) => {
//   return async (dispatch: Dispatch<BrandActhion>) => {
//     try {
//       dispatch({
//         type: BrandActionTypes.SELECTION_BRAND_SUCCESS,
//         payload: brand,
//       });
//     } catch (e) {
//       dispatch({
//         type: BrandActionTypes.SELECTION_BRAND_ERROR,
//         payload: "Ощибка",
//       });
//     }
//   };
// };
// export const selectedBrandsAll = () => {
//   return async (dispatch: Dispatch<BrandActhion>) => {
//     const all: TypeBrand = {
//       id: null,
//       name: "все",
//       createdAt: 1,
//       updatedAt: 1,
//     };
//     try {
//       dispatch({
//         type: BrandActionTypes.SELECTION_BRAND_SUCCESS,
//         payload: all,
//       });
//     } catch (e) {
//       dispatch({
//         type: BrandActionTypes.SELECTION_BRAND_ERROR,
//         payload: "Ощибка",
//       });
//     }
//   };
// };
