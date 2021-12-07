import React from "react";
import { useDispatch } from "react-redux";

import { IProduct } from "../../interface";

const ChoosingCard: React.FC<IProduct> = (el) => {
  const dispatch = useDispatch();
  const AddToCart = () => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: el,
    });
  };
  return (
    <div className="card-block">
      <div className="info-block">
        <h3 className="item-name">{el.name}</h3>
      </div>
      <button className="btn-buy" onClick={() => AddToCart()}>
        REMOVE FROM CART
      </button>
    </div>
  );
};

export default ChoosingCard;
