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
export enum UserActionTypes {
  FETCH_USER = "FETCH_USER",
  FETCH_USER_SUCCESSS = "FETCH_USER_SUCCESSS",
  FETCH_USER_ERROR = "FETCH_USER_ERROR",
}
interface FetchUserActhiom {
  type: UserActionTypes.FETCH_USER;
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
  | FetchUserActhiom
  | fetchUserSuccessAction
  | FetchUserErrorAction;
