import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const users = useSelector((state) => state.user.value);
  return (
    <View style={styles.header}>
      <Text>Welcome {users.username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
});
