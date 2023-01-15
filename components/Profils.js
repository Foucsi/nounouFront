import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function Profils({ profil, navigation, images }) {
  const handleSubmit = () => {
    navigation.navigate("Profil", {
      name: profil.username,
    });
  };
  return (
    <TouchableOpacity onPress={() => handleSubmit()}>
      <View style={styles.profil}>
        <View
          style={{
            height: "70%",
            width: "100%",
            shadowOffset: { width: -2, height: 4 },
            shadowColor: "#171717",
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
        >
          <Image
            style={{
              height: "100%",
              width: "100%",
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}
            source={{ uri: profil.photo }}
          />
        </View>
        <View
          style={{
            height: "30%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderColor: "#D9D6D0",
            borderWidth: 1,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        >
          <Text>{profil.username}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  profil: {
    width: 350,
    height: 400,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
