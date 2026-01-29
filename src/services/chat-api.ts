import { toast } from "react-toastify";
import { clientApi } from "./api-root";

export const getChatMsg = async (msg: string) => {
  try {
    const response = await clientApi.post<string>("/chat", {
      text: msg,
    });

    return response.data;
  } catch (e) {
    if (e instanceof Error) {
      toast.error(e.message, {
        autoClose: 3000,
      });
    }
  }
};
