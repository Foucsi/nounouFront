import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function ProfilScreen() {
  const route = useRoute();
  const { name, image } = route.params;
  return (
    <View style={styles.container}>
      <View style={{ height: "50%", width: "100%" }}>
        <Image
          source={{ uri: image }}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </View>
      <View style={{ height: "50%", width: "100%", padding: 20 }}>
        <View>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            {name.toUpperCase()}{" "}
            <AntDesign name="hearto" size={24} color="black" />
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", paddingTop: 10, alignItems: "center" }}
        >
          <AntDesign name="star" size={24} color="#FEB60A" />
          <AntDesign name="star" size={24} color="#FEB60A" />
          <AntDesign name="star" size={24} color="#FEB60A" />
          <AntDesign name="star" size={24} color="#FEB60A" />
          <AntDesign name="star" size={24} color="#FEB60A" />
          <Text>(2 avis)</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
