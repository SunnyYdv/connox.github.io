import cls from "classnames";
import React, { FC } from "react";
import { IconProps } from "shared/icons";

export const Cross: FC<IconProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("fill-current", className)}
      width="24" height="24" viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >

<path d="M18 6L6 18" stroke="black" strokeLinecap="square" strokeLinejoin="round"/>
<path d="M6 6L18 18" stroke="black" strokeLinecap="square" strokeLinejoin="round"/>
</svg>


  );
};
