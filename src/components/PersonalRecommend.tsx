import styled from "@emotion/styled";
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
    <PersonalRecommendBlock>
      {products.map((product) => (
        <ProductCard
          key={product.productId}
          flexDirection="column"
          product={product}
        />
      ))}
    </PersonalRecommendBlock>
  );
};

const PersonalRecommendBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: scroll;
  padding: 0 1rem;
`;

export default PersonalRecommend;
