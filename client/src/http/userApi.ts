import { User } from "./../types/user";
import { $host, $authHost } from "./index";
import JWT from "jwt-decode";
import jwt_decode from "jwt-decode";
interface Chek {
  token: string;
}
export const registration = async (
  email: string,
  password: string
): Promise<Chek> => {
  const { data } = await $host.post<any>("api/user/registration", {
    email,
    password,
    role: "ADMIN",
  });
  localStorage.setItem("token", data.token);
  return data;
};
export const login = async (email: string, password: string) => {
  const { data } = await $host.post<any>("api/user/login", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};

export const chek = async () => {
  const { data } = await $authHost.get<Chek>("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwt_decode(data.token);
};
