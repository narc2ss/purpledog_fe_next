import client from ".";
import { Response } from "../@types";

export enum BannerCode {
  main = "MAIN_TOP",
  timeSale = "MAIN_SUB_1",
  photoShot = "MAIN_SUB_2",
}

export interface Banner {
  bannerId: number;
  bannerGroupCodeId: string;
  bannerGroupCodeName: string;
  bannerCodeId: string;
  bannerCodeName: string;
  description: string;
  mainUseYn: boolean;
  thumbnailLinkUseYn: boolean;
  thumbnailLinkUrl: string;
  thumbnailImageUrl: string;
  useYn: boolean;
  sortingOrder: number;
  updateId: number;
  updateDate: string;
}

export const getBanner = async (bannerCodeId: BannerCode) => {
  let res;
  try {
    res = await client.get<Response<Banner[]>>(
      `/banner/bannerCodeId/${bannerCodeId}`
    );
  } catch (error) {
    console.error(error);
    throw Error("error");
  }
  return res.data.results;
};
