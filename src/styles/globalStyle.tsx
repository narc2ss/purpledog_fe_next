import { css } from "@emotion/react";
import { colorPalette } from "./colorPalette";

export const globalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Open+Sans:wght@300;400;500&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
    user-select: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-touch-callout: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    font-family: "Noto Sans KR", sans-serif;
  }

  a {
    text-decoration: none;
    color: ${colorPalette.gray5};
  }
`;
