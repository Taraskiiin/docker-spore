import React from "react";
import { useDispatch } from "react-redux";
import { BsPlusLg } from "react-icons/bs";

import { IProduct } from "../../interface";

import "./card.scss";

interface CardProps {
  product: IProduct;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const AddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: product,
    });
  };

  return (
    <div className="card-block">
      <div className="info-block">
        <h3 className="item-name">{product.name}</h3>
        <p>Description: {product.label}</p>
        <p className="item-price">Price: {product.price}</p>
      </div>
      <button className="btn-buy" onClick={() => AddToCart()}>
        <BsPlusLg />
      </button>
    </div>
  );
};

export default Card;
