import styled from "@emotion/styled";
import { FC } from "react";
import { colorPalette } from "../../styles/colorPalette";

interface Props {
  number: number;
}

const NumberBadge: FC<Props> = ({ number }) => {
  return <NumberBadgeBlock>{number}</NumberBadgeBlock>;
};

const NumberBadgeBlock = styled.div`
  position: absolute;
  top: 0;
  right: -2px;
  font-size: 0.625rem;
  background-color: ${colorPalette.badge0};
  line-height: 1;
  padding: 4px 4px 2px 4px;
  border-radius: 8px;
  color: ${colorPalette.gray0};
`;

export default NumberBadge;
