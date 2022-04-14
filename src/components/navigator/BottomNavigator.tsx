import styled from "@emotion/styled";
import Image from "next/image";
import { colorPalette } from "../../styles/colorPalette";
import Icon from "../common/Icon";

const BottomNavigator = () => {
  return (
    <BottomNavigatorBlock>
      <div className="button_block">
        <div>
          <Icon name="home" size={30} />
        </div>
        <span className="active">홈</span>
      </div>
      <div className="button_block">
        <div>
          <Icon name="magazine" size={30} />
        </div>
        <span>매거진</span>
      </div>
      <div className="button_block">
        <div>
          <Icon name="category" size={30} />
        </div>
        <span>카테고리</span>
      </div>
      <div className="button_block">
        <div>
          <Icon name="feeds" size={30} />
        </div>
        <span>피드</span>
      </div>
      <div className="button_block">
        <div>
          <Icon name="my" size={30} />
        </div>
        <span>내정보</span>
      </div>
    </BottomNavigatorBlock>
  );
};

const BottomNavigatorBlock = styled.div`
  position: fixed;
  width: 100%;
  min-width: 320px;
  height: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${colorPalette.gray0};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px -3px 30px rgba(0, 0, 0, 0.3);
  .button_block {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      font-size: 0.5rem;
    }
    .active {
      color: ${colorPalette.primary};
    }
  }
`;

export default BottomNavigator;
