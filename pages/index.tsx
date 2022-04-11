import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <section className="banner_main">메인배너</section>
      <section className="recommend">김새콤달콤님께 맞는 와인</section>
      <section className="time_sale">타임세일</section>
      <section className="banner_tour">인증샷 추어 배너</section>
      <section className="category">국가별 와인</section>
      <section className="exhibition">기획전</section>
      <section className="hot">인기와인</section>
    </div>
  );
};

export default Home;
