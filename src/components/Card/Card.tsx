import React from "react";
import { useDispatch } from "react-redux";

import { IProduct } from "../../interface";

import "./card.scss";

const Card: React.FC<IProduct> = (el) => {
  const dispatch = useDispatch();
  const AddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: el,
    });
  };
  return (
    <div className="card-block">
      <div className="info-block">
        <h3 className="item-name">{el.name}</h3>
        <p>Description: {el.label}</p>
        <p className="item-price">Price: {el.price}</p>
      </div>
      <button className="btn-buy" onClick={() => AddToCart()}>
        ADD TO CART
      </button>
    </div>
  );
};

export default Card;
