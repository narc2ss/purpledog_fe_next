import client from ".";
import { Response } from "../@types";

export enum TextGroup {
  main = "MAIN",
}

export const getTextGroup = async (textGroupCode: TextGroup) => {
  let res;
  try {
    res = await client.get<Response<SectionTextGroup>>(
      `/text/textGroupCode/${textGroupCode}`
    );
  } catch (error) {
    console.error(error);
    throw Error("error");
  }
  return res.data.results;
};

export interface SectionTextGroup {
  EVENT_DESCRIPTION: SectionText;
  EVENT_TITLE: SectionText;
  RECOMMEND_PRODUCT_2_DESCRIPTION: SectionText;
  COUNTRY_WINE_TITLE: SectionText;
  PERSONAL_RECOMMEND_DESCRIPTON: SectionText;
  RECOMMEND_PRODUCT_2_TITLTE: SectionText;
  PERSONAL_RECOMMEND_TITLE: SectionText;
  RECOMMEND_PRODUCT_1_TITLE: SectionText;
  COUNTRY_WINE__DESCRIPTION: SectionText;
}

export interface SectionText {
  textId: number;
  textGroupCodeId: string;
  textGroupCodeName: string;
  textCodeId: string;
  description: string;
  content: string;
  createId: number;
  updateId: number;
}
