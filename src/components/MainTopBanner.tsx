import Image from "next/image";
import { useQuery } from "react-query";
import { BannerCode, getBanner } from "../api/banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import styled from "@emotion/styled";
import { colorPalette } from "../styles/colorPalette";
import MainAppBar from "./MainAppBar";

const MainTopBanner = () => {
  const { data: banners } = useQuery("mainTopBanner", () =>
    getBanner(BannerCode.main)
  );

  if (!banners) return <div></div>;
  return (
    <MainTopBannerBlock>
      <MainAppBar />
      <Swiper scrollbar={{ hide: false }} modules={[Scrollbar]}>
        {banners.map((banner) => (
          <SwiperSlide key={banner.bannerId}>
            <Image
              key={banner.bannerId}
              src={banner.thumbnailImageUrl}
              layout="responsive"
              width={375}
              height={375}
              alt={banner.description}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <RoundedBottomBorder />
    </MainTopBannerBlock>
  );
};

const MainTopBannerBlock = styled.div`
  position: relative;
  .swiper {
    .swiper-scrollbar {
      width: 90%;
      bottom: 9%;
      left: 5%;
      background-color: #ffffff30;
      .swiper-scrollbar-drag {
        background-color: #ffffff;
      }
    }
  }
`;

const RoundedBottomBorder = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: 1rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: ${colorPalette.gray0};
`;

export default MainTopBanner;
