import type { ReactNode } from "react";
import styles from "./MessageList.module.css";
import clsx from "clsx";

interface MessageListProps {
  children: ReactNode;
  contentAlign?: "center";
}

export const MessageList = ({ children, contentAlign }: MessageListProps) => {
  return (
    <ul
      className={clsx(
        styles.listWrapper,
        contentAlign && styles[`align_${contentAlign}`]
      )}
    >
      {children}
    </ul>
  );
};
