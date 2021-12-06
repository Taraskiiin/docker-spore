import React from "react";

import { IProduct } from "../../interface";
import "./card.scss";
const Card: React.FC<IProduct> = (el) => {
  return (
    <div className="card-block">
      <div className="info-block">
        <h3 className="item-name">{el.name}</h3>
        <p>Description: {el.label}</p>
        <p className="item-price">Price: {el.price}</p>
      </div>
      <button className="btn-buy">ADD TO CART</button>
    </div>
  );
};

export default Card;
