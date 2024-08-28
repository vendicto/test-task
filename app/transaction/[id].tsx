import transactionsService from "@/utils/transactionsService";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function TransactionDetailsScreen() {
  const { id } = useLocalSearchParams();

  const transaction = transactionsService.getTransactionById(id as string);

  if (!transaction) {
    return (
      <View>
        <Text>Could not find transaction</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: `transaction ${transaction.id}`,
        }}
      />
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.type}>{transaction.type.toUpperCase()}</Text>
          <Text
            style={[
              styles.status,
              transaction.status === "opened" ? styles.opened : styles.closed,
            ]}
          >
            {transaction.status.toUpperCase()}
          </Text>
        </View>
        <Text style={styles.description}>{transaction.description}</Text>
        <Text
          style={[
            styles.amount,
            transaction.type === "credit" ? styles.positive : styles.negative,
          ]}
        >
          {transaction.type === "credit" ? "+" : "-"}$
          {transaction.amount.toFixed(2)}
        </Text>
        <View style={styles.participants}>
          <Text>From: {transaction.sender}</Text>
          <Text>To: {transaction.receiver}</Text>
        </View>
        <Text style={styles.date}>{transaction.date}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  type: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
    padding: 4,
    borderRadius: 4,
  },
  opened: {
    backgroundColor: "#FFD700",
    color: "#fff",
  },
  closed: {
    backgroundColor: "#32CD32",
    color: "#fff",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  date: {
    fontSize: 12,
    color: "#999",
    marginTop: 8,
  },
  participants: {
    marginVertical: 9,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  positive: {
    color: "#32CD32",
  },
  negative: {
    color: "#ff0000",
  },
});
