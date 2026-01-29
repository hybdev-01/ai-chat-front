import { Card } from "components/UI/Card";
import type { ReactNode } from "react";

import styles from "./MessageItem.module.css";

interface MessageItemProps {
  type: "sent" | "received";
  children: ReactNode;
}

export const MessageItem = ({ type, children }: MessageItemProps) => {
  if (type === "sent") {
    return (
      <li className={styles.itemWrapper} datatype={type}>
        <Card>{children}</Card>
      </li>
    );
  }

  return (
    <li className={styles.itemWrapper} datatype={type}>
      <pre className={styles.msgReceived}>{children}</pre>
    </li>
  );
};
