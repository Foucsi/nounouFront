import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation }) {
  const users = useSelector((state) => state.user.value);
  return (
    <View style={styles.header}>
      <View
        style={{ alignItems: "center", flexDirection: "row", width: "80%" }}
      >
        <View
          style={{
            width: "20%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Feather name="menu" size={48} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "65%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <MaterialIcons name="child-care" size={48} color="#1282A2" />
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold" }}>
            <Text style={{ color: "#1282A2" }}>SKI</Text>NOUNOU
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "15%",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingBottom: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
});
