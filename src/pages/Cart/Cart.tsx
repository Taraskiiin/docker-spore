import React, { useState } from "react";
import { useSelector } from "react-redux";

import ChoosingCard from "../../components/ChoosingCard/ChoosingCard";
import ReactLoading from "react-loading";
import { IProduct, IChoosingEl } from "../../interface";

const Cart: React.FC = () => {
  const [total, setTotal] = useState<number>(0);
  const items = useSelector(
    (state: { cart: { items: IProduct[] } }) => state.cart.items
  );
  let totalPrice = items.reduce((acc, num) => acc + num.price, 0);
  return (
    <div className="container">
      {items.map((el, index) => (
        <ChoosingCard {...el} />
      ))}
      <button onClick={() => console.log(totalPrice)}>Penis</button>
    </div>
  );
};

export default Cart;
