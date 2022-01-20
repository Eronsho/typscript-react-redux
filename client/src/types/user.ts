export interface UserState {
  user: User | null;
  loading: boolean;
  error: null | string;
}
export interface User {
  email: string;
  exp: number;
  iat: number;
  id: number;
  role: string;
}
export interface UserPayload {
  email: string;
  password: string;
}
export enum UserActionTypes {
  ADD_USER = "ADD_USER",
  LOG_OUT_USER = "LOG_OUT_USER",
  FETCH_USER = "FETCH_USER",
  FETCH_USER_SUCCESSS = "FETCH_USER_SUCCESSS",
  FETCH_USER_ERROR = "FETCH_USER_ERROR",
}
interface addUserAction {
  type: UserActionTypes.ADD_USER;
  payload: UserPayload;
}
interface logOutUser {
  type: UserActionTypes.LOG_OUT_USER;
}
interface FetchUserActhion {
  type: UserActionTypes.FETCH_USER;
  payload: UserPayload;
}
interface fetchUserSuccessAction {
  type: UserActionTypes.FETCH_USER_SUCCESSS;
  payload: User | null;
}
interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string;
}
export type UserAction =
  | FetchUserActhion
  | fetchUserSuccessAction
  | FetchUserErrorAction
  | addUserAction
  | logOutUser;
