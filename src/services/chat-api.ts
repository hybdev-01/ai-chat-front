import { toast } from "react-toastify";
import { clientApi } from "./api-root";
import { AxiosError } from "axios";
import type { ChatBotResponseType } from "./types";

export const getChatMsg = async (msg: string) => {
  try {
    const response = await clientApi.post<ChatBotResponseType>("/chat", {
      message: msg,
    });

    return response.data;
  } catch (e) {
    if (e instanceof Error || e instanceof AxiosError) {
      toast.error(e.message, {
        autoClose: 3000,
      });

      return null;
    }

    toast.error(`Unknown error: ${e}`, {
      autoClose: 3000,
    });

    return null;
  }
};
