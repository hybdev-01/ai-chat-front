import { combineReducers, configureStore } from "@reduxjs/toolkit";
import chatReducer, { chatReducerPath } from "features/Chat/chat-slice";

const rootReducers = combineReducers({
  [chatReducerPath]: chatReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
