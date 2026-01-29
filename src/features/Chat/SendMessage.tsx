import { Button } from "components/UI/Button";

import SendIcon from "assets/icons/send-icon.svg?react";

import styles from "./SendMessage.module.css";

export const SendMessage = () => {
  return (
    <Button className={styles.sendMsgWrapper} isEmpty>
      <SendIcon />
    </Button>
  );
};
