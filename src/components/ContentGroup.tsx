import styled from "@emotion/styled";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface Props {
  title: string;
  more?: string;
  description: string;
  children: ReactNode;
}

const ContentGroup: FC<Props> = ({ title, description, more, children }) => {
  return (
    <ContentGroupBlock>
      <div className="content_header">
        <div className="title_wrap">
          <h2>{title}</h2>
          {more && (
            <Link href={more}>
              <a>더보기</a>
            </Link>
          )}
        </div>
        <h3>{description}</h3>
      </div>
      {children}
    </ContentGroupBlock>
  );
};

const ContentGroupBlock = styled.section`
  overflow: scroll;
  & + & {
    margin-top: 1.875rem;
  }

  .content_header {
    margin-bottom: 1rem;
    padding: 0 1rem;
    .title_wrap {
      height: 1.625rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        font-size: 1.125rem;
      }
      a {
        font-size: 0.8125rem;
        font-weight: 500;
      }
    }

    h3 {
      font-size: 0.8125rem;
      font-weight: normal;
    }
  }
`;
export default ContentGroup;
