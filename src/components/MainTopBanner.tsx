import Image from "next/image";
import { useState } from "react";
import { useQuery } from "react-query";
import { BannerCode, getBanner } from "../api/banner";

const MainTopBanner = () => {
  const { data: banners } = useQuery("mainTopBanner", () =>
    getBanner(BannerCode.main)
  );

  const deviceWidth = useState();
  if (!banners) return <div></div>;
  return (
    <div>
      {banners.map((banner) => (
        <div key={banner.bannerId}>
          <Image
            key={banner.bannerId}
            src={banner.thumbnailImageUrl}
            layout="responsive"
            width={375}
            height={375}
            alt={banner.description}
          />
        </div>
      ))}
    </div>
  );
};

export default MainTopBanner;
