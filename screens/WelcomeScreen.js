import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function WelcomeScreen() {
  const users = useSelector((state) => state.user.value);
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen {users.username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
