import React, { useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type TransactionFilter = "all" | "opened" | "closed";

type Props = {
  setFilter: (value: TransactionFilter) => void;
  filter: TransactionFilter;
};

const TransactionsSwitcher = ({ filter, setFilter }: Props) => {
  const handleClickAll = useCallback(() => setFilter("all"), []);
  const handleClickOpened = useCallback(() => setFilter("opened"), []);
  const handleClickClosed = useCallback(() => setFilter("closed"), []);

  return (
    <View style={styles.switcher}>
      <TouchableOpacity
        style={[styles.switchButton, filter === "all" && styles.activeButton]}
        onPress={handleClickAll}
      >
        <Text
          style={[styles.switchText, filter === "all" && styles.activeText]}
        >
          All
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.switchButton,
          filter === "opened" && styles.activeButton,
        ]}
        onPress={handleClickOpened}
      >
        <Text
          style={[styles.switchText, filter === "opened" && styles.activeText]}
        >
          Opened
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.switchButton,
          filter === "closed" && styles.activeButton,
        ]}
        onPress={handleClickClosed}
      >
        <Text
          style={[styles.switchText, filter === "closed" && styles.activeText]}
        >
          Closed
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switcher: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  switchButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
  },
  activeButton: {
    backgroundColor: "#4CAF50",
  },
  switchText: {
    fontSize: 16,
    color: "#333",
  },
  activeText: {
    color: "#fff",
  },
});

export default TransactionsSwitcher;
