import classNames from "classnames/bind";
import { HTMLAttributes } from "react";
import _styles from "./Text.module.scss";
const styles = classNames.bind(_styles);

export type TextProps = HTMLAttributes<HTMLDivElement> & {
  size?: 1 | 2 | 3 | 4;
  bold?: boolean;
  center?: boolean;
  danger?: boolean;
  disableUserSelect?: boolean;
  currentColor?: boolean;
  ellipsis?: boolean;
  wrap?: "noWrap" | "breakSpaces";
};

export const Text = ({
  className,
  size = 1,
  bold = false,
  danger = false,
  disableUserSelect: userSelectNone = false,
  currentColor = false,
  ellipsis = false,
  center = false,
  wrap = "noWrap",
  ...props
}: TextProps): JSX.Element => {
  return (
    <div
      className={styles(
        "text",
        wrap,
        `textFontSize${size}`,
        {
          center,
          ellipsis,
          danger,
          bold,
          userSelectNone,
          currentColor,
        },
        className
      )}
      {...props}
    />
  );
};
