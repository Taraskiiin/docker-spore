import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChoosingCard from "../../components/ChoosingCard/ChoosingCard";
import { IProduct } from "../../interface";
import "./cart.scss";

const Cart: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const items = useSelector(
    (state: { cart: { items: { item: IProduct; count: number }[] } }) =>
      state.cart.items
  );
  const total = items.length
    ? items.reduce((acc, num) => acc + num.item.price * num.count, 0)
    : 0;
  return (
    <div className="container">
      <section className="cart-section">
        <div className="list-block">
          {items.length
            ? items.map((el, i) => (
                <ChoosingCard key={i} product={el.item} count={el.count} />
              ))
            : null}
        </div>
        <p className="total">Total: {total}</p>
      </section>
    </div>
  );
};

export default Cart;
