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
import { addPrice } from "../reducers/users";

export default function SettingsPrice({ navigation }) {
  const [price, setPrice] = useState();
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
      });
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={{ height: "80%", width: "100%", alignItems: "center" }}>
        <TextInput
          placeholder="price"
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
          onPress={() => {
            updatePrice();
          }}
        >
          <Text>Valider</Text>
        </TouchableOpacity>
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
});
