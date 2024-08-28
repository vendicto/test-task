import { Transaction } from "@/interfaces/transaction";
import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  item: Transaction;
};

const TransactionItem = ({ item }: Props) => {
  return (
    <Link href={`/transaction/${item.id}`} asChild>
      <Pressable>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.date}>{item.date}</Text>
            <Text
              style={[
                styles.status,
                item.status === "opened" ? styles.opened : styles.closed,
              ]}
            >
              {item.status.toUpperCase()}
            </Text>
          </View>
          <Text
            style={[
              styles.amount,
              item.type === "credit" ? styles.positive : styles.negative,
            ]}
          >
            {item.type === "credit" ? "+" : "-"}${item.amount.toFixed(2)}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
};

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
  positive: {
    color: "#32CD32",
  },
  negative: {
    color: "#ff0000",
  },
});

export default TransactionItem;
