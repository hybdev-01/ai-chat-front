import { Button } from "components/UI/Button";
import { TextArea } from "components/UI/TextArea";
import { useState } from "react";

import SendIcon from "assets/icons/send-icon.svg?react";

function App() {
  const [val, setVal] = useState("");

  return (
    <>
      <h2>AI Chat App</h2>
      <TextArea
        value={val}
        onChange={(e) => setVal(e.currentTarget.value)}
        leftButton={
          <Button isEmpty>
            <SendIcon />
          </Button>
        }
        rightButton={
          <Button isEmpty>
            <SendIcon />
          </Button>
        }
      />
      <Button>Click</Button>
    </>
  );
}

export default App;
