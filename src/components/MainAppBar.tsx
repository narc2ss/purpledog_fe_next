import styled from "@emotion/styled";
import { colorPalette } from "../styles/colorPalette";
import DotBadge from "./common/DotBadge";
import Icon from "./common/Icon";
import NumberBadge from "./common/NumberBadge";

const MainAppBar = () => {
  return (
    <MainAppBarBlock>
      <div className="search_block">
        <Icon name="search" size={30} />
      </div>
      <div className="feature_block">
        <NotificationBlock>
          <Icon name="bell" size={30} />
          <DotBadge />
        </NotificationBlock>
        <ShoppingBlock>
          <Icon name="shopping_bag" size={30} />
          <NumberBadge number={14} />
        </ShoppingBlock>
      </div>
    </MainAppBarBlock>
  );
};

const MainAppBarBlock = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 3.125rem;
  z-index: 3;
  padding: 0.625rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .search_block {
  }
  .feature_block {
    display: flex;
    div + div {
      margin-left: 0.5rem;
    }
  }
`;

const ShoppingBlock = styled.div`
  position: relative;
`;

const NotificationBlock = styled.div`
  position: relative;
`;

export default MainAppBar;
