import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import fetchIp from "../fetchIp.json";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPrice, addProfil } from "../reducers/users";
import { AntDesign } from "@expo/vector-icons";
import { useEffect } from "react";

export default function SettingsPrice({ navigation }) {
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [placeholderPrice, setPlaceHolderPrice] = useState("price");
  const users = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const updatePrice = () => {
    fetch(`http://${fetchIp.myIp}:3000/users/updatePrice/${users.token}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: price }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(addPrice(data.user.price));
        navigation.navigate("Welcome");
      });
    setPrice();
  };

  const updateProfil = () => {
    fetch(`http://${fetchIp.myIp}:3000/users/editProfil/${users.token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profil: description }),
    })
      .then((res) => res.json())
      .then((data) => {
        data.user.profil.map((e) => {
          setDescription(e.profil);
        });
        dispatch(addProfil(description));
        navigation.navigate("Welcome");
      });
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View
        style={{
          height: "80%",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <TextInput
          placeholder={placeholderPrice}
          value={price}
          onChangeText={(value) => setPrice(value)}
          style={{
            width: "80%",
            height: 40,
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            paddingBottom: 10,
            marginTop: 40,
          }}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            if (!price) {
              setPlaceHolderPrice("Veuillez entrer un montant");
            } else {
              updatePrice();
              setPlaceHolderPrice("price");
            }
          }}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>
            Validation du tarif
          </Text>
        </TouchableOpacity>

        <TextInput
          value={description}
          onChangeText={(value) => setDescription(value)}
          placeholder="Modifier votre profil"
          multiline={true}
          style={{
            borderColor: "grey",
            borderWidth: 1,
            width: "80%",
            height: 200,
            padding: 5,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            if (description) {
              updateProfil();
            }
          }}
          style={styles.btn}
        >
          <Text style={{ color: "#fff", fontSize: 18 }}>
            Validation du profil
          </Text>
        </TouchableOpacity>
        <AntDesign
          name="stepbackward"
          size={24}
          color="#1282A2"
          onPress={() => navigation.navigate("Welcome")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    padding: 20,
    backgroundColor: "#1282A2",
    borderRadius: 10,
  },
});
