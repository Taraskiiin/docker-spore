import { IProduct } from "../../interface";

interface IInitialState {
  items: { item: IProduct; count: number }[];
}

const cartInitialState = localStorage.getItem("cart");
const initialState: IInitialState = cartInitialState
  ? JSON.parse(cartInitialState)
  : [];
console.log(initialState);
export default (
  state = initialState,
  action: { type: string; payload: IProduct }
) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_ITEM":
      const indexOfCurrentProductToAdd = state.items.findIndex(
        (el: { item: IProduct; count: number }) => el.item.id === payload.id
      );
      if (indexOfCurrentProductToAdd >= 0) {
        state.items[indexOfCurrentProductToAdd].count += 1;
        localStorage.setItem("cart", JSON.stringify(state));
        return state;
      }
      localStorage.setItem(
        "cart",
        JSON.stringify({
          ...state,
          items: [...state.items, { item: payload, count: 1 }],
        })
      );
      return {
        ...state,
        items: [...state.items, { item: payload, count: 1 }],
      };
    case "REMOVE_ITEM":
      const indexOfCurrentProductToDelete = state.items.findIndex(
        (el: { item: IProduct; count: number }) => el.item.id === payload.id
      );
      if (state.items[indexOfCurrentProductToDelete].count > 1) {
        state.items[indexOfCurrentProductToDelete].count -= 1;
        localStorage.setItem(
          "cart",
          JSON.stringify({
            ...state,
            items: [...state.items],
          })
        );
        return { ...state, items: [...state.items] };
      }
      localStorage.setItem(
        "cart",
        JSON.stringify({
          ...state,
          items: state.items.filter(
            (el: { item: IProduct; count: number }) => el.item.id != payload.id
          ),
        })
      );
      return {
        ...state,
        items: state.items.filter(
          (el: { item: IProduct; count: number }) => el.item.id != payload.id
        ),
      };
    default:
      return state;
  }
};
