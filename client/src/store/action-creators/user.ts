import { UserActionTypes, UserPayload } from "./../../types/user";
export const addUseerRequest = (payload: UserPayload) => ({
  type: UserActionTypes.ADD_USER,
  payload,
});
export const addLoginUseerRequest = (payload: UserPayload) => ({
  type: UserActionTypes.FETCH_USER,
  payload,
});

export const addUseerSuccess = (payload: any) => ({
  type: UserActionTypes.FETCH_USER_SUCCESSS,
  payload,
});
export const addUseerError = (payload: string) => ({
  type: UserActionTypes.FETCH_USER_ERROR,
  payload,
});
export const logOut = () => ({
  type: UserActionTypes.LOG_OUT_USER,
});
