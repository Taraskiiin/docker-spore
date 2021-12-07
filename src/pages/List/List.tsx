import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Card from "../../components/Card/Card";

import { IProduct } from "../../interface";

const List: React.FC = () => {
  const [items, setItems] = useState<IProduct[]>([]);
  useEffect(() => {
    const itemStringArray = localStorage.getItem("items");
    setItems(itemStringArray ? JSON.parse(itemStringArray) : []);
  }, []);
  return (
    <div className="container">
      {items ? (
        items.map((el) => <Card {...el} />)
      ) : (
        <ReactLoading
          type={"cylon"}
          color={"#fff"}
          height={"20%"}
          width={"20%"}
        />
      )}
    </div>
  );
};

export default List;
