import { Link } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Test app</Text>
        <Link href="/transactions" asChild>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Go to transactions</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  btn: {
    backgroundColor: "skyblue",
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginVertical: 8,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
  },
});
