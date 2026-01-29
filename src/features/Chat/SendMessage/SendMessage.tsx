import { Button } from "components/UI/Button";

import SendIcon from "assets/icons/send-icon.svg?react";

import styles from "./SendMessage.module.css";
import { useAppDispatch } from "hooks/redux";
import { addMessage } from "../chat-slice";
import { nanoid } from "@reduxjs/toolkit";

interface SendMessageProps {
  msg: string;
  clearInput: VoidFunction;
}

export const SendMessage = ({ msg, clearInput }: SendMessageProps) => {
  const dispatch = useAppDispatch();

  const sendMessage = () => {
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

      setTimeout(() => {
        dispatch(
          addMessage({
            date: new Date().toISOString(),
            id: nanoid(5),
            msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, asperiores iure. Natus quidem saepe, harum possimus ipsam recusandae ducimus! Tenetur iusto esse harum dolorum placeat, nihil explicabo culpa cum nulla?",
            type: "received",
          })
        );
      }, 3000);
    }
  };

  return (
    <Button onClick={sendMessage} className={styles.sendMsgWrapper} isEmpty>
      <SendIcon />
    </Button>
  );
};
