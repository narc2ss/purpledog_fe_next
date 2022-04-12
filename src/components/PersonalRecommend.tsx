const dummy = [1, , 2, 3, 4];

const PersonalRecommend = () => {
  return (
    <div>
      {dummy.map((data) => (
        <div key={data}>
          <div></div>
          <div>
            <span>프랑스 / 제주 와인</span>
            <h4>까르뜨 블랑슈 벡스토퍼</h4>
            <p>39,500원</p>
            <span>12%</span>
            <span>45,500원</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalRecommend;
