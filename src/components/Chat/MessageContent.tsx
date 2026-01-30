import type { MessageType } from "features/Chat/types";
import { MessageList } from "./MessageList";
import { MessageItem } from "./MessageItem";

import ChatIcon from "assets/icons/chat-icon.svg?react";

import styles from "./MessageContent.module.css";
import { useRef } from "react";

interface MessageContentProps {
  msgList: MessageType[];
}

export const MessageContent = ({ msgList }: MessageContentProps) => {
  const rndIdxRef = useRef(() => Math.floor(Math.random() * startTitle.length));

  if (!msgList.length) {
    // eslint-disable-next-line react-hooks/refs
    const rndIdx = rndIdxRef.current();

    return (
      <MessageList contentAlign="center">
        <ChatIcon />
        <h2 className={styles.title}>{startTitle[rndIdx]}</h2>
      </MessageList>
    );
  }

  return (
    <MessageList>
      {msgList.map((item) =>
        item.type === "load" ? (
          <MessageItem key={item.id} type="load" />
        ) : (
          <MessageItem key={item.id} type={item.type}>
            {item.msg}
          </MessageItem>
        )
      )}
    </MessageList>
  );
};

const startTitle = [
  "\nHi there\n\nWhat would you like to know?",
  "\nWhat can I help you with today?",
  "\nWhat information are you looking for?",
  "\nWhat question do you have?",
];
