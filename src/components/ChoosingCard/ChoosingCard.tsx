import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { IProduct } from "../../interface";
import "./choosingCard.scss";

interface IChoosingCardProps {
  product: IProduct;
  count: number;
}

const ChoosingCard: React.FC<IChoosingCardProps> = ({ product, count }) => {
  const dispatch = useDispatch();
  const AddToCart = () => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: product,
    });
  };
  return (
    <div className="card-block">
      <div className="info-block">
        <h3 className="item-name">{product.name}</h3>
        <p>Count: {count}</p>
      </div>
      <button className="btn-remove" onClick={() => AddToCart()}>
        <ImCross />
      </button>
    </div>
  );
};

export default ChoosingCard;
