import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";
import { Wine } from "../api/product";

type FlexDirection = "column" | "row";

interface Props {
  flexDirection: FlexDirection;
  product: Wine;
}

const ProductCard: FC<Props> = ({ flexDirection, product }) => {
  return (
    <ProductCardBlock flexDirection={flexDirection}>
      <div>
        <Image
          src={product.thumbnailImageUrl}
          width={140}
          height={165}
          alt="wine"
        />
      </div>
      <div>
        <span>{product.styleNames}</span>
        <h4>
          {product.countryName}/{product.englishName}
        </h4>
        <p>39,500원</p>
        <span>12%</span>
        <span>45,500원</span>
      </div>
    </ProductCardBlock>
  );
};

interface ProductCardBlockProps {
  flexDirection: FlexDirection;
}

const ProductCardBlock = styled.div<ProductCardBlockProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
`;

export default ProductCard;
