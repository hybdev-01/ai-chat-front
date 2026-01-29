import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { MessageType } from "./types";

type ChatState = {
  id: string;
  messages: MessageType[];
};

const initialState: ChatState = {
  id: "",
  messages: [],
};

const chatSlice = createSlice({
  name: "@@chatSlice",
  initialState,
  selectors: {
    selectGetChatMsg: (state) => state.messages,
  },
  reducers: {
    addMessage: (state, action: PayloadAction<MessageType>) => {
      if (!state.messages.length) state.id = nanoid(8);
      const lastMsg = state.messages.at(-1);
      if (lastMsg?.type === "load" && action.payload.type === "received") {
        state.messages.pop();
      }
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export const { selectGetChatMsg } = chatSlice.selectors;

export const chatReducerPath = chatSlice.reducerPath;

export default chatSlice.reducer;
