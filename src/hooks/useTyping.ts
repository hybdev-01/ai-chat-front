import { useEffect, useState } from "react";

type HookProps = {
  msg: string;
  speed?: number;
};

export const useTyping = ({ msg, speed = 35 }: HookProps) => {
  const [resultMsg, setResultMsg] = useState("");
  const words = msg.split(/(\s+)/);

  useEffect(() => {
    let i = 0;
    //setResultMsg("");

    const interval = setInterval(() => {
      setResultMsg((prev) => (words[i] ? prev + words[i] : prev));
      i++;

      if (i >= words.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return resultMsg;
};
