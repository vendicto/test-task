import { Transaction } from "@/interfaces/transaction";

export const transactions: Transaction[] = [
  {
    id: "tx001",
    amount: 150.75,
    date: "2024-08-01",
    description: "Grocery Shopping",
    type: "debit",
    status: "closed",
    sender: "Master of puppets",
    receiver: "Current user",
  },
  {
    id: "tx002",
    amount: 2500.0,
    date: "2024-08-03",
    description: "Salary",
    type: "credit",
    status: "closed",
    sender: "Master of puppets",
    receiver: "Current user",
  },
  {
    id: "tx003",
    amount: 45.0,
    date: "2024-08-04",
    description: "Restaurant",
    type: "debit",
    status: "closed",
    sender: "Current user",
    receiver: "Master of puppets",
  },
  {
    id: "tx004",
    amount: 125.5,
    date: "2024-08-05",
    description: "Electricity Bill",
    type: "debit",
    status: "closed",
    sender: "Current user",
    receiver: "Master of puppets",
  },
  {
    id: "tx005",
    amount: 1000.0,
    date: "2024-08-07",
    description: "Freelance Payment",
    type: "credit",
    status: "opened",
    sender: "Master of puppets",
    receiver: "Current user",
  },
  {
    id: "tx006",
    amount: 75.25,
    date: "2024-08-08",
    description: "Online Shopping",
    type: "debit",
    status: "closed",
    sender: "Master of puppets",
    receiver: "Current user",
  },
  {
    id: "tx007",
    amount: 200.0,
    date: "2024-08-10",
    description: "Gift",
    type: "credit",
    status: "closed",
    sender: "Master of puppets",
    receiver: "Current user",
  },
  {
    id: "tx008",
    amount: 60.0,
    date: "2024-08-12",
    description: "Gas Station",
    type: "debit",
    status: "opened",
    sender: "Master of puppets",
    receiver: "Current user",
  },
  {
    id: "tx009",
    amount: 300.0,
    date: "2024-08-14",
    description: "Car Repair",
    type: "debit",
    status: "closed",
    sender: "Master of puppets",
    receiver: "Current user",
  },
  {
    id: "tx010",
    amount: 150.0,
    date: "2024-08-15",
    description: "Dinner with Friends",
    type: "debit",
    status: "opened",
    sender: "Master of puppets",
    receiver: "Current user",
  },
];

function getTransactions() {
  return transactions;
}

function getTransactionById(id: string) {
  const transaction = transactions.find((item) => item.id === id);

  if (!transaction) {
    return null;
  }

  return transaction;
}

const transactionsService = { getTransactions, getTransactionById };

export default transactionsService;
