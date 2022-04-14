import type { NextPage } from "next";
import { useQuery } from "react-query";
import { getTextGroup, TextGroup } from "../src/api/textGroup";
import ContentGroup from "../src/components/ContentGroup";
import CountryWine from "../src/components/CountryWine";
import MainTopBanner from "../src/components/MainTopBanner";
import PersonalRecommend from "../src/components/PersonalRecommend";
import TimeSale from "../src/components/TimeSale";
import Event from "../src/components/Event";

const Home: NextPage = () => {
  const { data: textGroup } = useQuery("textGroup", () =>
    getTextGroup(TextGroup.main)
  );

  if (!textGroup) return <div></div>;
  return (
    <div>
      <MainTopBanner />
      <ContentGroup
        title={"김새콤달콤" + textGroup.PERSONAL_RECOMMEND_TITLE.content}
        description={textGroup.PERSONAL_RECOMMEND_DESCRIPTON.content}
      >
        <PersonalRecommend />
      </ContentGroup>
      <ContentGroup
        title={textGroup.RECOMMEND_PRODUCT_1_TITLE.content}
        description="와인을 정기 구독중인 회원님에게만 드려요"
      >
        <TimeSale />
      </ContentGroup>
      <ContentGroup
        title={textGroup.COUNTRY_WINE_TITLE.content}
        description={textGroup.COUNTRY_WINE__DESCRIPTION.content}
      >
        <CountryWine />
      </ContentGroup>
      <ContentGroup
        title={textGroup.EVENT_TITLE.content}
        description={textGroup.EVENT_DESCRIPTION.content}
        more="/"
      >
        <Event />
      </ContentGroup>
      <ContentGroup
        title={textGroup.RECOMMEND_PRODUCT_2_TITLTE.content}
        description={textGroup.RECOMMEND_PRODUCT_2_DESCRIPTION.content}
      >
        <div></div>
      </ContentGroup>
    </div>
  );
};

export default Home;
