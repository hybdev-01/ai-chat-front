import { TextArea } from "components/UI/TextArea";
import { SendMessage } from "features/Chat/SendMessage/SendMessage";
import { useState } from "react";

interface MessageInputProps {
  className?: string;
}

export const MessageInput = ({ className }: MessageInputProps) => {
  const [msg, setMsg] = useState("");

  const onChangeHandler = (newMsg: string) => {
    setMsg(newMsg);
  };

  const clearInput = () => setMsg("");

  return (
    <TextArea
      className={className}
      value={msg}
      onChange={onChangeHandler}
      placeholder="Ask whatever you want"
      leftButton={<SendMessage msg={msg} clearInput={clearInput} />}
    />
  );
};
