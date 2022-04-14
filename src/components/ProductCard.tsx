import styled from "@emotion/styled";
import Image from "next/image";
import { FC, memo, useEffect, useState } from "react";
import { Wine } from "../api/product";
import useInterval from "../hooks/useInterval";
import { colorPalette } from "../styles/colorPalette";
import { millisecondsToTime, numberTocomma } from "../utils";
import Icon from "./common/Icon";

type FlexDirection = "column" | "row";

interface Props {
  flexDirection: FlexDirection;
  product: Wine;
}

const ProductCard: FC<Props> = ({ flexDirection, product }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!product.timeSaleEndDate) return;
    const endDate = new Date(product.timeSaleEndDate);
    const diff = (endDate.getTime() - Date.now()) as number;
    setCount(diff);
  }, [product.timeSaleEndDate]);

  useInterval(() => {
    setCount(count - 1000);
  }, 1000);

  return (
    <ProductCardBlock flexDirection={flexDirection}>
      <div className="thumbnail_block">
        <Image
          src={product.thumbnailImageUrl}
          width={flexDirection === "column" ? 140 : 110}
          height={flexDirection === "column" ? 168 : 132}
          objectFit="contain"
          alt="wine"
        />
      </div>
      <div className="product_info_block">
        <span className="country">
          {product.countryName} · {product.wineryName}
        </span>
        <h4 className="name">{product.englishName}</h4>
        <p className="price">{numberTocomma(product.salesPrice)}원</p>
        {product.productOnSales && product.salesPrice !== 0 && (
          <div className="discount">
            <span className="percent">{product.discountPercent}%</span>
            <span className="price">
              {numberTocomma(product.discountPrice)}원
            </span>
            <p className="timer">
              <Icon name="clock" size={14} />
              <span>{millisecondsToTime(count)} 남음</span>
            </p>
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
  gap: ${({ flexDirection }) =>
    flexDirection === "column" ? ".5rem" : "1rem"};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: flex-start;
  min-width: 140px;
  min-width: ${({ flexDirection }) => flexDirection === "row" && "100%"};
  .thumbnail_block {
    background-color: ${colorPalette.gray2};
    border-radius: 0.375rem;
  }
  .product_info_block {
    flex: 1;
    .country {
      display: inline-block;
      font-size: 0.6875rem;
      color: ${colorPalette.gray5};
      line-height: 1.5;
    }
    .name {
      height: 2.5rem;
      font-size: 0.8125rem;
      display: -webkit-box;
      display: -ms-flexbox;
      display: box;
      white-space: normal;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 1.7;
    }

    .price {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.7;
      margin-top: ${({ flexDirection }) =>
        flexDirection === "column" && ".75rem"};
    }
    .discount {
      display: inline-block;
      .percent {
        font-size: 0.75rem;
        color: ${colorPalette.badge0};
        font-weight: 700;
      }
      .price {
        font-size: 0.75rem;
        color: ${colorPalette.gray5};
        text-decoration: line-through;
        margin-left: 5px;
        font-weight: 400;
      }
      .timer {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: 4px;
        padding: 0.25rem;
        border-radius: 3px;
        background-color: ${colorPalette.badge0};
        span {
          display: inline-block;
          margin-left: 0.25rem;
          margin-top: 1px;
          line-height: 1;
          color: ${colorPalette.gray0};
          font-size: 0.625rem;
        }
      }
    }
  }
  & + & {
    ${({ flexDirection }) =>
      flexDirection === "column" ? "margin-left: .625rem" : "margin-top: 1rem"};
  }
`;

export default memo(ProductCard);
