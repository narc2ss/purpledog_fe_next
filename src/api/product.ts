import client from ".";
import { Response } from "../@types";

export interface Wine {
  productId: number;
  useYn: string;
  viewYn: string;
  englishName: string;
  productCode: string;
  categoryId: number;
  title: string;
  statusCode: string;
  statusCodeName: string;
  weight: number;
  salesPrice: number;
  dry: number;
  body: number;
  tannins: number;
  acidity: number;
  bubble: number;
  overall: number;
  alc: number;
  wineryName: string;
  description: string;
  productUrl: string;
  thumbnailImageUrl: string;
  taxYn: string;
  regionId: number;
  regionName: string;
  countryId: number;
  countryName: string;
  pointDescription: string;
  styleNames: string;
  dryNames: string;
  productOnSales: boolean;
}

export const getSucscriptionWineRecommend = async () => {
  let res;
  try {
    res = await client.get<Response<Wine[]>>(
      `/product/subscriptionWineRecommend`
    );
  } catch (error) {
    console.error(error);
    throw Error("error");
  }

  return res.data.results;
};

export const getSelectTimeSaleWine = async () => {
  let res;
  try {
    res = await client.get<Response<Wine[]>>(`/product/selectTimeSaleWine`);
  } catch (error) {
    console.error(error);
    throw Error("error");
  }

  return res.data.results;
};
