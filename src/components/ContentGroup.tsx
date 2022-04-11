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
    <section>
      <div>
        <h2>{title}</h2>
        <h3>{description}</h3>
        {more && (
          <Link href={more}>
            <a>더보기</a>
          </Link>
        )}
      </div>
      {children}
    </section>
  );
};
export default ContentGroup;
