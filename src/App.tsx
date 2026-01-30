import ChatPage from "pages/ChatPage/ChatPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ChatPage />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
