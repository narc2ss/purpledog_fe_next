import styled from "@emotion/styled";
import Image from "next/image";
import { colorPalette } from "../styles/colorPalette";

const CountryWine = () => {
  return (
    <CountryWineBlock>
      <CountryBlock countryName="france">
        <p>프랑스</p>
      </CountryBlock>
      <CountryBlock countryName="italy">
        <p>이탈리아</p>
      </CountryBlock>
      <CountryBlock countryName="usa">
        <p>미국</p>
      </CountryBlock>
      <CountryBlock countryName="portugal">
        <p>포르투갈</p>
      </CountryBlock>
      <CountryBlock countryName="australia">
        <p>호주</p>
      </CountryBlock>
      <CountryBlock countryName="spain">
        <p>스페인</p>
      </CountryBlock>
    </CountryWineBlock>
  );
};

const CountryWineBlock = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.6875rem;
  padding: 0 1rem;
`;

interface CountryBlockProps {
  countryName: string;
}
const CountryBlock = styled.div<CountryBlockProps>`
  height: 60px;
  background: url("/images/${({ countryName }) => countryName}.png") 0 0/100%
    no-repeat;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  p {
    margin-left: 1.25rem;
    color: ${colorPalette.gray0};
    text-shadow: 1px 1px ${colorPalette.gray6};
  }
`;

export default CountryWine;
