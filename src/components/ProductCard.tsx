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
        <span>
          {product.countryName} · {product.wineryName}
        </span>
        <h4>{product.englishName}</h4>
        <p>39,500원</p>
        {product.productOnSales && (
          <div>
            <span>12%</span>
            <span>45,500원</span>
          </div>
        )}
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
  min-width: ${({ flexDirection }) => flexDirection === "column" && "140px"};
`;

export default ProductCard;
