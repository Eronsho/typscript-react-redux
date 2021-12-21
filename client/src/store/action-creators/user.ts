import { UserActionTypes } from "./../../types/user";
import jwt_decode from "jwt-decode";
import { Dispatch } from "react";
import { User, UserAction } from "../../types/user";
import { $host } from "../../http";

export const addUseer = (email: string, password: string) => {
  return async (dispath: Dispatch<UserAction>) => {
    try {
      dispath({ type: UserActionTypes.FETCH_USER });
      const { data } = await $host.post<any>("api/user/registration", {
        email,
        password,
        role: "ADMIN",
      });
      localStorage.setItem("token", data.token);
      console.log(jwt_decode(data.token));
      dispath({
        type: UserActionTypes.FETCH_USER_SUCCESSS,
        payload: jwt_decode(data.token),
      });
    } catch (e) {
      dispath({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: '"Произошла ошибка при загрузке пользователей"',
      });
    }
  };
};

export const addLoginUseer = (email: string, password: string) => {
  return async (dispath: Dispatch<UserAction>) => {
    try {
      dispath({ type: UserActionTypes.FETCH_USER });
      const { data } = await $host.post<any>("api/user/login", {
        email,
        password,
        role: "ADMIN",
      });
      localStorage.setItem("token", data.token);
      console.log(jwt_decode(data.token));
      dispath({
        type: UserActionTypes.FETCH_USER_SUCCESSS,
        payload: jwt_decode(data.token),
      });
    } catch (e) {
      dispath({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: '"Произошла ошибка при загрузке пользователей"',
      });
    }
  };
};
export const logOut = () => {
  return async (dispath: Dispatch<UserAction>) => {
    debugger;
    try {
      dispath({
        type: UserActionTypes.FETCH_USER_SUCCESSS,
        payload: null,
      });
    } catch (e) {
      dispath({
        type: UserActionTypes.FETCH_USER_ERROR,
        payload: '"Произошла ошибка при загрузке пользователей"',
      });
    }
  };
};
