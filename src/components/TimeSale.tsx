import { FC } from "react";
import { useQuery } from "react-query";
import { getSelectTimeSaleWine } from "../api/product";
import ProductCard from "./ProductCard";

const TimeSale: FC = () => {
  const { data: products } = useQuery("timeSale", () =>
    getSelectTimeSaleWine()
  );

  if (!products) return <div></div>;
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.productId}
          product={product}
          flexDirection="row"
        />
      ))}
    </div>
  );
};

export default TimeSale;
