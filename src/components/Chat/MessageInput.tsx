import { TextArea } from "components/UI/TextArea";
import { SendMessage } from "features/Chat/SendMessage";
import { useState } from "react";

interface MessageInputProps {
  className?: string;
}

export const MessageInput = ({ className }: MessageInputProps) => {
  const [val, setVal] = useState("");

  return (
    <TextArea
      className={className}
      value={val}
      onChange={(e) => setVal(e.currentTarget.value)}
      placeholder="Ask whatever you want"
      leftButton={<SendMessage />}
    />
  );
};
