import { MessageInput } from "components/Chat/MessageInput";

import styles from "./ChatPage.module.css";
import { MessageItem } from "components/Chat/MessageItem";
import { MessageList } from "components/Chat/MessageList";
import { useAppSelector } from "hooks/redux";
import { selectGetChatMsg } from "features/Chat/chat-slice";

const ChatPage = () => {
  const messages = useAppSelector(selectGetChatMsg);

  return (
    <section className={styles.pageWrapper}>
      <MessageList>
        {messages.map((item) =>
          item.type === "load" ? (
            <MessageItem key={item.id} type="load" />
          ) : (
            <MessageItem key={item.id} type={item.type}>
              {item.msg}
            </MessageItem>
          )
        )}
        {/* <MessageItem type="sent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit error
          ullam nobis ratione repellat fugiat quo qui facere dolorem illum!
          Laborum officia nulla, inventore quibusdam commodi eos? Fuga, ipsa
          cupiditate!
        </MessageItem>
        <MessageItem type="received">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit error
          ullam nobis ratione repellat fugiat quo qui facere dolorem illum!
          Laborum officia nulla, inventore quibusdam commodi eos? Fuga, ipsa
          cupiditate!
        </MessageItem> */}
      </MessageList>
      <MessageInput className={styles.msgInput} />
    </section>
  );
};

export default ChatPage;
