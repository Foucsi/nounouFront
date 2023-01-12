import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.jpg")}
        style={{ height: "100%", width: "100%", justifyContent: "flex-end" }}
      >
        <View
          style={{
            width: "100%",
            height: "60%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 32, fontWeight: "bold" }}>
            <Text style={{ color: "#1282A2" }}>SKI</Text>NOUNOU
          </Text>
        </View>
        <View style={styles.containerInput}>
          <TouchableOpacity
            style={{
              width: "60%",
              height: "12%",
              alignItems: "center",
              backgroundColor: "#1282A2",
              justifyContent: "center",
              borderRadius: 5,
              opacity: 0.8,
              borderColor: "#fff",
              borderWidth: 1,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
              Connexion
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "60%",
              height: "12%",
              alignItems: "center",
              backgroundColor: "#1282A2",
              justifyContent: "center",
              marginTop: 20,
              borderRadius: 5,
              opacity: 0.8,
              borderColor: "#fff",
              borderWidth: 1,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
              s'enregistrer
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
  containerInput: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
});
