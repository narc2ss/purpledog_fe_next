import styled from "@emotion/styled";
import Image from "next/image";
import { colorPalette } from "../styles/colorPalette";

const Event = () => {
  return (
    <EventBlock>
      <div className="image_block">
        <Image
          src="/images/exhibition.png"
          width={345}
          height={345}
          layout="responsive"
          alt="event"
        />
      </div>
      <div className="description">
        <p>
          와인으로 떠나는 세계여행, <br />
          와인 기획전 OPEN!
        </p>
        <span>22.02.15 - 22.03.15</span>
      </div>
    </EventBlock>
  );
};

const EventBlock = styled.div`
  padding: 0 1rem;
  width: 100%;
  height: 100%;
  position: relative;
  .description {
    position: absolute;
    bottom: 1.5rem;
    left: 2rem;
    color: ${colorPalette.gray0};
    p {
      font-size: 1.125rem;
    }
    span {
      color: ${colorPalette.gray5};
      font-size: 0.8125rem;
    }
  }
`;

export default Event;
