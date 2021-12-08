import { IProduct } from "../../interface";

interface IInitialState {
  items: { item: IProduct; count: number }[];
}
const initialState: IInitialState = {
  items: [],
};

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
      if (!state.items?.length) {
        return {
          ...state,
          items: [...state.items, { item: payload, count: 1 }],
        };
      } else if (indexOfCurrentProductToAdd >= 0) {
        state.items[indexOfCurrentProductToAdd].count += 1;
        return { ...state };
      } else {
        return {
          ...state,
          items: [...state.items, { item: payload, count: 1 }],
        };
      }
    case "REMOVE_ITEM":
      const indexOfCurrentProductToDelete = state.items.findIndex(
        (el: { item: IProduct; count: number }) => el.item.id === payload.id
      );
      if (state.items[indexOfCurrentProductToDelete].count > 1) {
        state.items[indexOfCurrentProductToDelete].count -= 1;
        return { ...state };
      } else {
        return {
          ...state,
          items: state.items.filter(
            (el: { item: IProduct; count: number }) => el.item.id != payload.id
          ),
        };
      }
    default:
      return state;
  }
};
