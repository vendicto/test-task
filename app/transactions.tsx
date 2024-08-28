import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Transaction } from "@/interfaces/transaction";
import TransactionsList from "@/components/transactionsList/TransactionsList";
import TransactionsSwitcher, {
  TransactionFilter,
} from "@/components/transactionsSwitcher/TransactionsSwitcher";
import transactionsService from "@/utils/transactionsService";

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const result = transactionsService.getTransactions();
    setTransactions(result);
  }, []);

  const [filter, setFilter] = useState<TransactionFilter>("all");

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter((transaction) => {
          return transaction.status === filter;
        });

  return (
    <View style={styles.container}>
      <TransactionsSwitcher filter={filter} setFilter={setFilter} />
      <TransactionsList transactions={filteredTransactions} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
