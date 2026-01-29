import type { ReactNode } from "react";
import styles from "./MessageList.module.css";

interface MessageListProps {
  children: ReactNode;
}

export const MessageList = ({ children }: MessageListProps) => {
  return <ul className={styles.listWrapper}>{children}</ul>;
};
