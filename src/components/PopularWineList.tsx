import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { getPopularWine } from "../api/product";
import PopularWineItem from "./PopularWineItem";

const PopularWineList = () => {
  const { data: products } = useQuery("popularWine", () => getPopularWine());

  if (!products) return <div></div>;
  return (
    <PopularWineBlock>
      {products.map((product) => (
        <PopularWineItem key={product.productId} product={product} />
      ))}
    </PopularWineBlock>
  );
};

const PopularWineBlock = styled.div`
  padding: 0 1rem;
  display: grid;
  gap: 0.6875rem;
  grid-template-columns: 1fr 1fr;
`;

export default PopularWineList;
