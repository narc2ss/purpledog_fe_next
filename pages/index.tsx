import type { NextPage } from "next";
import { useQuery } from "react-query";
import { getTextGroup, TextGroup } from "../src/api/textGroup";
import ContentGroup from "../src/components/ContentGroup";

const Home: NextPage = () => {
  const { data: textGroup } = useQuery("textGroup", () =>
    getTextGroup(TextGroup.main)
  );

  if (!textGroup) return <div></div>;
  return (
    <div>
      <ContentGroup
        title={"김새콤달콤" + textGroup.PERSONAL_RECOMMEND_TITLE.content}
        description={textGroup.PERSONAL_RECOMMEND_DESCRIPTON.content}
      >
        <h1></h1>
      </ContentGroup>
      <ContentGroup
        title={textGroup.RECOMMEND_PRODUCT_1_TITLE.content}
        description="와인을 정기 구독중인 회원님에게만 드려요"
      >
        <h1></h1>
      </ContentGroup>
      <ContentGroup
        title={textGroup.COUNTRY_WINE_TITLE.content}
        description={textGroup.COUNTRY_WINE__DESCRIPTION.content}
      >
        <h1></h1>
      </ContentGroup>
      <ContentGroup
        title={textGroup.EVENT_TITLE.content}
        description={textGroup.EVENT_DESCRIPTION.content}
        more="/"
      >
        <h1></h1>
      </ContentGroup>
      <ContentGroup
        title={textGroup.RECOMMEND_PRODUCT_2_TITLTE.content}
        description={textGroup.RECOMMEND_PRODUCT_2_DESCRIPTION.content}
      >
        <h1></h1>
      </ContentGroup>
    </div>
  );
};

export default Home;
