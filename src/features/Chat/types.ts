export type MessageType = {
  id: string;
  date: string;
  type: "sent" | "received" | "load";
  msg: string;
};
