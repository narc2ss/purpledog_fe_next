import styled from "@emotion/styled";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Wine } from "../api/product";
import useInterval from "../hooks/useInterval";
import { colorPalette } from "../styles/colorPalette";
import { millisecondsToTime, numberTocomma } from "../utils";
import Icon from "./common/Icon";

interface Props {
  product: Wine;
}

const PopularWineItem: FC<Props> = ({ product }) => {
  return (
    <PopularWineItemBlock>
      <div className="thumbail_block">
        <Image
          src={product.thumbnailImageUrl}
          width={167}
          height={198}
          alt={product.description}
          objectFit="contain"
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
          </div>
        )}
      </div>
    </PopularWineItemBlock>
  );
};
const PopularWineItemBlock = styled.div`
  .thumbail_block {
    background-color: ${colorPalette.gray2};
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
      font-size: 0.8125rem;
      display: -webkit-box;
      display: -ms-flexbox;
      display: box;
      white-space: normal;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 1.7;
    }

    .price {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.7;
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
    }
  }
`;

export default PopularWineItem;
