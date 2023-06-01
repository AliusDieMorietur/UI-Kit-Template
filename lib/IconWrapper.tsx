import classNames from "classnames/bind";
import { HTMLAttributes } from "react";
import _styles from "./IconWrapper.module.scss";
const styles = classNames.bind(_styles);

export type IconWrapperProps = HTMLAttributes<HTMLDivElement> & {
  type?: "default";
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  danger?: boolean;
  pointer?: boolean;
};

export const IconWrapper = ({
  className,
  type = "default",
  size = 2,
  danger = false,
  pointer = false,
  ...props
}: IconWrapperProps): JSX.Element => (
  <div
    className={styles(
      "box",
      type,
      { danger, pointer },
      `size${size}`,
      className
    )}
    {...props}
  />
);
