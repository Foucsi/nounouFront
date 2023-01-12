import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";

export default function SigninScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={{ fontSize: 32, paddingBottom: 20, color: "#2D2D2A" }}>
          <Text style={{ color: "#1282A2", fontWeight: "bold" }}>SKI</Text>
          NOUNOU
        </Text>
      </TouchableOpacity>

      <View style={styles.containerSignin}>
        <TextInput
          autoCapitalize={false}
          placeholder="Prenom"
          placeholderTextColor="#fff"
          style={styles.input}
          value={username}
          onChangeText={(value) => setUsername(value)}
        />
        <TextInput
          secureTextEntry={true}
          autoCapitalize={false}
          placeholder="Password"
          placeholderTextColor="#fff"
          style={styles.input}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
      </View>
      <View>
        <Text>{msg}</Text>
      </View>
      <TouchableOpacity
        style={{
          marginTop: 20,
          width: "60%",
          backgroundColor: "#1282A2",
          height: 50,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>CONNEXION</Text>
      </TouchableOpacity>
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
  containerSignin: {
    height: "50%",
    width: "80%",
    backgroundColor: "#1282A2",
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    width: "80%",
    paddingBottom: 10,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
  },
});
