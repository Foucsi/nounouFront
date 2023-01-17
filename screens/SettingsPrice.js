import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useState } from "react";

export default function SettingsPrice({ navigation }) {
  const [price, setPrice] = useState();
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={{ height: "80%", width: "100%" }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
