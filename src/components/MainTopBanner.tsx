import Image from "next/image";
import { useQuery } from "react-query";
import { BannerCode, getBanner } from "../api/banner";

const MainTopBanner = () => {
  const { data: banners } = useQuery("mainTopBanner", () =>
    getBanner(BannerCode.main)
  );
  if (!banners) return <div></div>;
  return (
    <div>
      {banners.map((banner) => (
        // <Image
        //   key={banner.bannerId}
        //   src={banner.thumbnailImageUrl}
        //   width={375}
        //   height={375}
        //   alt={banner.description}
        // />
        <div key={banner.bannerId}>{banner.thumbnailImageUrl}</div>
      ))}
    </div>
  );
};

export default MainTopBanner;
