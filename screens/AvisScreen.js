import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { NavigationRouteContext, useRoute } from "@react-navigation/native";
import fetchIp from "../fetchIp.json";
import { useState } from "react";
import { useSelector } from "react-redux";
import { addAvis } from "../reducers/users";
import { useDispatch } from "react-redux";

export default function AvisScreen({ navigation }) {
  const [avisInput, setAvisInput] = useState("");
  const route = useRoute();
  const { avis } = route.params;
  const users = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  let today = new Date();
  let options = { day: "numeric", month: "long", year: "numeric" };

  const updateAvis = () => {
    fetch(`http://${fetchIp.myIp}:3000/users/addAvis/${users.token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ avis: avisInput }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          dispatch(addAvis(avisInput));
          navigation.navigate("Welcome");
        }
      });
  };

  const test = avis.map((e, index) => {
    return (
      <View
        key={index}
        style={{
          width: "100%",
          height: 100,
          borderColor: "grey",
          borderWidth: 1,
          padding: 10,
          marginTop: 5,
          borderRadius: 10,
        }}
      >
        <Text>{e.avis}</Text>
        <Text>Commenté le : {today.toLocaleDateString("fr-FR", options)}</Text>
      </View>
    );
  });
  return (
    <View style={styles.container}>
      <View style={styles.containerCom}>
        <TextInput
          placeholder="Votre avis ..."
          style={styles.input}
          multiline={true}
          value={avisInput}
          onChangeText={(value) => setAvisInput(value)}
        />
        <TouchableOpacity
          onPress={() => updateAvis()}
          style={{
            backgroundColor: "#1282A2",
            padding: 20,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>
            Publier votre avis
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ width: "80%" }}>{test}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  containerCom: {
    marginTop: 100,
    width: "100%",
    alignItems: "center",
  },
  input: {
    borderColor: "grey",
    borderWidth: 1,
    width: "80%",
    height: 200,
    padding: 5,
  },
});
