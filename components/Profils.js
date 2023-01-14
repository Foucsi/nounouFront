import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Profils({ profil, images }) {
  return (
    <View style={styles.profil}>
      <View style={{ height: "70%", width: "100%" }}>
        <Image
          style={{ height: "100%", width: "100%" }}
          source={{ uri: images[Math.floor(Math.random() * images.length)] }}
        />
      </View>
      <View style={{ height: "30%", width: "100%", backgroundColor: "tomato" }}>
        <Text>{profil.username}</Text>
      </View>
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
