import { useQuery } from "react-query";
import { getSucscriptionWineRecommend } from "../api/product";
import ProductCard from "./ProductCard";

const dummy = [1, , 2, 3, 4];

const PersonalRecommend = () => {
  const { data: products } = useQuery("products", () =>
    getSucscriptionWineRecommend()
  );

  if (!products) return <div></div>;
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.productId}
          flexDirection="column"
          product={product}
        />
      ))}
    </div>
  );
};

export default PersonalRecommend;
