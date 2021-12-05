import { IProduct } from "../../interface";
const initialState = {
  items: [],
};

export default (
  state = initialState,
  action: { type: string; payload: IProduct }
) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item: IProduct) => item.id !== payload.id),
      };
    default:
      return state;
  }
};
