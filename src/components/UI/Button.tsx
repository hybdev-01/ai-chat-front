import type { ReactNode } from "react";

import styles from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  title?: string;
  isEmpty?: boolean;
}

export const Button = ({
  className,
  children,
  title = "",
  isEmpty = false,
}: ButtonProps) => {
  return (
    <button
      title={title}
      className={clsx(styles.btnWrapper, className, isEmpty && styles.btnEmpty)}
    >
      {children}
    </button>
  );
};
