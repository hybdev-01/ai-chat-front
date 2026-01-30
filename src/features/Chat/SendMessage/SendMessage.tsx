import { Button } from "components/UI/Button";

import SendIcon from "assets/icons/send-icon.svg?react";

import styles from "./SendMessage.module.css";
import { useAppDispatch } from "hooks/redux";
import { addMessage } from "../chat-slice";
import { nanoid } from "@reduxjs/toolkit";
import { getChatMsg } from "services/chat-api";

interface SendMessageProps {
  msg: string;
  clearInput: VoidFunction;
}

export const SendMessage = ({ msg, clearInput }: SendMessageProps) => {
  const dispatch = useAppDispatch();

  const sendMessage = async () => {
    if (msg.trim().length > 0) {
      dispatch(
        addMessage({
          date: new Date().toISOString(),
          id: nanoid(5),
          msg,
          type: "sent",
        })
      );
      dispatch(
        addMessage({
          date: new Date().toISOString(),
          id: nanoid(5),
          msg: "",
          type: "load",
        })
      );

      clearInput();
      const resp = await getChatMsg(msg);

      if (resp !== null) {
        dispatch(
          addMessage({
            date: resp.created,
            id: resp.id,
            msg: resp.message,
            type: "received",
          })
        );
      }
    }
  };

  return (
    <Button onClick={sendMessage} className={styles.sendMsgWrapper} isEmpty>
      <SendIcon />
    </Button>
  );
};
