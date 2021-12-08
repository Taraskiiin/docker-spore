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
      const indexOfCurrentProduct = state.items.findIndex(
        (el: { item: IProduct; count: number }) => el.item.id === payload.id
      );
      if (!state.items?.length) {
        return {
          ...state,
          items: [...state.items, { item: payload, count: 1 }],
        };
      } else if (indexOfCurrentProduct >= 0) {
        state.items[indexOfCurrentProduct].count += 1;
        return { ...state };
      } else {
        return {
          ...state,
          items: [...state.items, { item: payload, count: 1 }],
        };
      }
    case "REMOVE_ITEM":
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
