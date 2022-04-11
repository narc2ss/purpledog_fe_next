import Image from "next/image";
import React, { FC } from "react";

interface Props {
  name: string;
  size?: number;
}

const Icon: FC<Props> = ({ name, size = 24 }) => {
  return (
    <Image src={`/icons/${name}.svg`} width={size} height={size} alt={name} />
  );
};

export default Icon;
