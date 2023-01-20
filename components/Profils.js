import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPhoto } from "../reducers/users";
import fetchIp from "../fetchIp.json";
import { useState } from "react";
import { useEffect } from "react";
import { addPrice } from "../reducers/users";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function Profils({ profil, navigation, images }) {
  const [price, setPrice] = useState(0);
  const users = useSelector((state) => state.user.value);

  const newProf = profil.profil.map((e, index) => {
    return (
      <View key={index}>
        <Text>{e.profil}</Text>
      </View>
    );
  });

  const prof = profil.profil.map((e, index) => {
    return (
      <View key={index}>
        <Text>{e.profil.substr(0, 35)}...</Text>
      </View>
    );
  });
  // useEffect(() => {
  //   fetch(`http://${fetchIp.myIp}:3000/users/getInfo/${users.token}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data) {
  //         dispatch(addPrice(data.user.price));
  //         setPrice(data.user.price);
  //       }
  //     });
  // });

  const dispatch = useDispatch();
  const handleSubmit = () => {
    navigation.navigate("Profil", {
      name: profil.username,
      price: profil.price,
      prof: newProf,
    });
    dispatch(addPhoto(profil.photo));
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
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            source={{ uri: profil.photo }}
          />
        </View>
        <View
          style={{
            height: "30%",
            width: "100%",
            justifyContent: "space-evenly",
            backgroundColor: "#fff",
            borderColor: "#D9D6D0",
            borderWidth: 1,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            padding: 10,
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: "bold", color: "#3A3A3A" }}>
            {profil.username}
          </Text>
          <Text>{profil.price} €/heure</Text>
          <ScrollView>{prof}</ScrollView>
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
