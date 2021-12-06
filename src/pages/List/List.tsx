import React, { useEffect, useState } from "react";
import { IProduct } from "../../interface";

const List: React.FC = () => {
  const [items, setItems] = useState<IProduct[]>([]);
  useEffect(() => {
    const itemStringArray = localStorage.getItem("items");
    setItems(itemStringArray ? JSON.parse(itemStringArray) : []);
  }, []);
  return (
    <div>
      {items.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default List;
