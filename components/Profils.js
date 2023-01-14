import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Profils({ profil }) {
  return (
    <View style={styles.profil}>
      <Text>{profil.username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profil: {
    width: 300,
    height: 300,
    backgroundColor: "grey",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
