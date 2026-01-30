import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export const useSpeech = (): [string, VoidFunction, VoidFunction] => {
  const [resultText, setResultText] = useState("");

  const recognitionRef = useRef<SpeechRecognition>(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast.error("SpeechRecognition is not supported by this browser");
      return;
    }

    const speechRec = new SpeechRecognition();
    speechRec.continuous = true;
    speechRec.interimResults = true;
    speechRec.lang = "ru-RU";

    speechRec.onresult = (event: SpeechRecognitionEvent) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setResultText(transcript);
    };

    recognitionRef.current = speechRec;
  }, []);

  const start = () => recognitionRef.current?.start();

  const stop = () => recognitionRef.current?.stop();

  return [resultText, start, stop];
};
