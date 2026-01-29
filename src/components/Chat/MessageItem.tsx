import { Card } from "components/UI/Card";
import type { ReactNode } from "react";

import DotsIcon from "assets/icons/bouncing-dots.svg?react";

import styles from "./MessageItem.module.css";
import { useTyping } from "hooks/useTyping";

interface MessageItemProps {
  type: "sent" | "received" | "load";
  children?: ReactNode;
}

export const MessageItem = ({ type, children }: MessageItemProps) => {
  const typedMsg = useTyping({ msg: children?.toString() || "" });

  if (type === "sent") {
    return (
      <li className={styles.itemWrapper} datatype={type}>
        <Card>{children}</Card>
      </li>
    );
  }

  if (type === "load") {
    return (
      <li className={styles.itemWrapper} datatype={type}>
        <DotsIcon />
      </li>
    );
  }

  return (
    <li className={styles.itemWrapper} datatype={type}>
      <pre className={styles.msgReceived}>{typedMsg}</pre>
    </li>
  );
};
