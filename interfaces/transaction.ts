export type Transaction = {
  id: string;
  amount: number;
  date: string;
  description: string;
  type: "credit" | "debit";
  status: "opened" | "closed";
  sender: string;
  receiver: string;
};
