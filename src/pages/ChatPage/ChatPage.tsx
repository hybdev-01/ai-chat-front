import { MessageInput } from "components/Chat/MessageInput";

import styles from "./ChatPage.module.css";
import { useAppSelector } from "hooks/redux";
import { selectGetChatMsg } from "features/Chat/chat-slice";

import { MessageContent } from "components/Chat/MessageContent";

const ChatPage = () => {
  const messages = useAppSelector(selectGetChatMsg);

  return (
    <section className={styles.pageWrapper}>
      <MessageContent msgList={messages} />
      <MessageInput className={styles.msgInput} />
    </section>
  );
};

export default ChatPage;
