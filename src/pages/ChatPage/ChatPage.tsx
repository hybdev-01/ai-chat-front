import { MessageInput } from "components/Chat/MessageInput";

import styles from "./ChatPage.module.css";
import { MessageItem } from "components/Chat/MessageItem";
import { MessageList } from "components/Chat/MessageList";

const ChatPage = () => {
  return (
    <section className={styles.pageWrapper}>
      <MessageList>
        <MessageItem type="sent">
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
        </MessageItem>
      </MessageList>
      <MessageInput className={styles.msgInput} />
    </section>
  );
};

export default ChatPage;
