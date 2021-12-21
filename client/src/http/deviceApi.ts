import { CreateType } from "./../types/device";
import { $authHost, $host } from ".";

// export const fetchOneDevice = async (id?: string) => {
//   const { data } = await $host.get("api/device/" + id);
//   return data;
// };
export const createBrand = async (brand: CreateType) => {
  const { data } = await $authHost.post("api/brand", brand);
  return data;
};
export const createType = async (type: CreateType) => {
  const { data } = await $authHost.post("api/type", type);
  return data;
};
export const createDevice = async (device: any) => {
  const { data } = await $authHost.post("api/device", device);
  return data;
};
