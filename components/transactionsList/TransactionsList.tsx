import { Transaction } from "@/interfaces/transaction";
import React, { useCallback } from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import TransactionItem from "./TransactionItem";

type Props = {
  transactions: Transaction[];
};

const TransactionsList = (props: Props) => {
  const renderItem = useCallback(
    ({ item }: { item: Transaction }) => (
      <TransactionItem key={item.id} item={item} />
    ),
    []
  );

  const keyExtractor = useCallback((item: Transaction) => item.id, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={props.transactions}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.list}
        ListEmptyComponent={<Text>No items</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: StatusBar.currentHeight || 0,
  },
  list: {
    padding: 20,
  },
});

export default TransactionsList;
