import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { BannerCode, getBanner } from "../api/banner";
import { getSelectTimeSaleWine } from "../api/product";
import ProductCard from "./ProductCard";

const TimeSale: FC = () => {
  const { data: products } = useQuery("timeSale", () =>
    getSelectTimeSaleWine()
  );
  const { data: timeSaleBanners } = useQuery("timeSaleBanner", () =>
    getBanner(BannerCode.timeSale)
  );
  const { data: photoShotBanners } = useQuery("photoShotBanner", () =>
    getBanner(BannerCode.photoShot)
  );

  if (!products) return <div></div>;
  return (
    <TimeSaleBlock>
      <div className="time_sale_banner_block">
        <Swiper>
          {timeSaleBanners?.map((banner) => (
            <SwiperSlide key={banner.bannerId}>
              <Image
                src={banner.thumbnailImageUrl}
                width={345}
                height={80}
                layout="responsive"
                alt={banner.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {products.map((product) => (
        <ProductCard
          key={product.productId}
          product={product}
          flexDirection="row"
        />
      ))}
      <div className="photo_shot_banner_block">
        {timeSaleBanners?.map((banner) => (
          <SwiperSlide key={banner.bannerId}>
            <Image
              src={banner.thumbnailImageUrl}
              width={345}
              height={80}
              layout="responsive"
              alt={banner.description}
            />
          </SwiperSlide>
        ))}
      </div>
    </TimeSaleBlock>
  );
};

const TimeSaleBlock = styled.div`
  padding: 0 1rem;
  .time_sale_banner_block {
    margin-bottom: 1rem;
  }
  .photo_shot_banner_block {
    margin: 2rem 0 0 0;
  }
`;

export default TimeSale;
