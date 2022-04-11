import styled from "@emotion/styled";
import { FC } from "react";
import { colorPalette } from "../../styles/colorPalette";

const DotBadge: FC = () => {
  return <DotBadgeBlock />;
};

const DotBadgeBlock = styled.div`
  position: absolute;
  top: 2px;
  right: 4px;
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background-color: ${colorPalette.badge0};
`;

export default DotBadge;
