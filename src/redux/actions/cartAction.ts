import { IProduct } from "../../interface";

export const setCart = (items: IProduct) => ({
  type: "SET_ITEMS",
  payload: items,
});
