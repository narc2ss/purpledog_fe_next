import client from ".";

export enum BannerCode {
  main = "MAIN_TOP",
  timeSale = "MAIN_SUB_1",
  photoShot = "MAIN_SUB_2",
}

export const getBanner = async (bannerCodeId: BannerCode) => {
  const res = await client.get(`/banner/bannerCodeId/${bannerCodeId}`);
  return res.data.result;
};
