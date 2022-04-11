import type { NextPage } from "next";
import { useQuery } from "react-query";
import { getTextGroup, TextGroup } from "../src/api/textGroup";

const Home: NextPage = () => {
  const { data: textGroup } = useQuery("textGroup", () =>
    getTextGroup(TextGroup.main)
  );

  console.log(textGroup);
  if (!textGroup) return <div></div>;
  return (
    <div>
      <section>
        <h2>{textGroup.COUNTRY_WINE_TITLE.content}</h2>
        <h3>{textGroup.COUNTRY_WINE__DESCRIPTION.content}</h3>
      </section>
      <section>
        <h2>{textGroup.EVENT_TITLE.content}</h2>
        <h3>{textGroup.EVENT_DESCRIPTION.content}</h3>
      </section>
      <section>
        <h2>{textGroup.PERSONAL_RECOMMEND_TITLE.content}</h2>
        <h3>{textGroup.PERSONAL_RECOMMEND_DESCRIPTON.content}</h3>
      </section>
      <section>
        <h2>{textGroup.RECOMMEND_PRODUCT_1_TITLE.content}</h2>
        <h3>없음</h3>
      </section>
      <section>
        <h2>{textGroup.RECOMMEND_PRODUCT_2_TITLTE.content}</h2>
        <h3>{textGroup.RECOMMEND_PRODUCT_2_DESCRIPTION.content}</h3>
      </section>
    </div>
  );
};

export default Home;
