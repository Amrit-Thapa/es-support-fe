import React, {ComponentProps} from "react";
import classNames from "../../../node_modules/classnames/index";

export const Container = ({children}: ComponentProps<"div">) => {
  return <div className="">{children}</div>;
};

export const SectionHead = ({
  children,
  white,
}: ComponentProps<"div"> & {white: boolean}) => {
  return (
    <div className={classNames("text-lg md:text-5xl", {"text-white": white})}>
      {children}
    </div>
  );
};
