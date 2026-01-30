import { Button } from "components/UI/Button";

import MicOnIcon from "assets/icons/microphone-on-icon.svg?react";
import MicOffIcon from "assets/icons/microphone-off-icon.svg?react";

import styles from "./RecordMessage.module.css";
import { useState } from "react";
import { useSpeech } from "hooks/useSpeech";
import { toast } from "react-toastify";

interface RecordMessageProps {
  onSendText: (text: string) => void;
}

export const RecordMessage = ({ onSendText }: RecordMessageProps) => {
  const [turnMic, setTurnMic] = useState(false);

  const [resultText, startRecord, stopRecord] = useSpeech();

  const onRecordHandler = () => {
    if (!turnMic) {
      startRecord();
      const timer = setTimeout(() => {
        setTurnMic(true);
        toast.success("Recording started");
        clearTimeout(timer);
      }, 3000);
      return;
    }
    setTurnMic(false);
    stopRecord();
    onSendText(resultText);
  };

  return (
    <Button className={styles.recMsgWrapper} onClick={onRecordHandler} isEmpty>
      {!turnMic ? <MicOnIcon /> : <MicOffIcon />}
    </Button>
  );
};
