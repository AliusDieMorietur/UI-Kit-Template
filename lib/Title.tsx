import classNames from "classnames/bind";
import { HTMLAttributes } from "react";
import _styles from "./Title.module.scss";
const styles = classNames.bind(_styles);

export type TitleProps = HTMLAttributes<HTMLDivElement> & {
  size?: 1 | 2 | 3;
  invert?: boolean;
  danger?: boolean;
  disableUserSelect?: boolean;
  currentColor?: boolean;
  ellipsis?: boolean;
  bold?: boolean;
  center?: boolean;
  wrap?: "noWrap" | "breakSpaces";
};

export const Title = ({
  className,
  size = 2,
  danger = false,
  disableUserSelect: userSelectNone = false,
  currentColor = false,
  ellipsis = false,
  wrap = "noWrap",
  bold = true,
  center = false,
  ...props
}: TitleProps): JSX.Element => {
  return (
    <div
      className={styles(
        "title",
        wrap,
        {
          bold,
          center,
          ellipsis,
          danger,
          userSelectNone,
          currentColor,
        },
        `fontSize${size}`,
        className
      )}
      {...props}
    />
  );
};
