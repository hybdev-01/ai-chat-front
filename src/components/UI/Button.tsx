import type { ReactNode } from "react";

import styles from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  title?: string;
  isEmpty?: boolean;
  onClick: VoidFunction;
}

export const Button = ({
  className,
  children,
  title = "",
  isEmpty = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      title={title}
      onClick={onClick}
      className={clsx(styles.btnWrapper, className, isEmpty && styles.btnEmpty)}
    >
      {children}
    </button>
  );
};
