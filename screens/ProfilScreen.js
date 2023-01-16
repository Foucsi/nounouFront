import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { addPhoto } from "../reducers/users";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function ProfilScreen({ navigation }) {
  const users = useSelector((state) => state.user.value);
  const [images, setImage] = useState(users.photo);
  const route = useRoute();
  const { name } = route.params;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch(`http://192.168.1.51:3000/users/getPhoto/${name}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setImage(data.data);
  //     });
  // }, [users.photo]);

  const uploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // fetch(`http://172.20.10.2:3000/users/addPhoto/${users.token}`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ photo: result.assets[0].uri }),
      // })
      //   .then((res) => res.json())
      //   .then((data) => {
      //     if (data.result) {
      //       setImage(result.assets[0].uri);
      //       dispatch(addPhoto(result.assets[0].uri));
      //     }
      //   });
      const formData = new FormData();
      formData.append("userPhoto", {
        uri: result.assets[0].uri,
        name: "photo.jpg",
        type: "image/jpeg",
      });

      fetch(`http://192.168.1.51:3000/users/upload/${users.token}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.result) {
            setImage(result.assets[0].uri);
            dispatch(addPhoto(result.assets[0].uri));
          }
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ height: "50%", width: "100%" }}>
        {images && (
          <Image
            source={{ uri: images }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          />
        )}
        {users.username === name ? (
          <TouchableOpacity
            onPress={() => uploadImage()}
            style={{ position: "relative", top: 430, left: 10 }}
          >
            <Entypo name="upload-to-cloud" size={32} color="#1282A2" />
          </TouchableOpacity>
        ) : (
          ""
        )}
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
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Text>retour</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            height: 90,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {users.username === name && (
            <FontAwesome5 name="pencil-alt" size={24} color="#1282A2" />
          )}
        </View>
        <View
          style={{
            width: "100%",
            height: 130,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: "100%",
              width: "50%",
              borderColor: "#DEDCD7",
              borderWidth: 0.5,
              padding: 10,
              backgroundColor: "#1282A2",
              justifyContent: "space-evenly",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Tarif indicatif</Text>
            <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>
              25 €<Text style={{ fontSize: 16 }}>/heure</Text>
            </Text>
          </View>
          <View
            style={{
              height: "100%",
              width: "50%",
              borderColor: "#DEDCD7",
              borderWidth: 0.5,
              padding: 10,
              justifyContent: "space-evenly",
            }}
          >
            <Text style={{ color: "#3A3A3A", fontSize: 16 }}>Expérience</Text>
            <Text
              style={{ color: "#3A3A3A", fontSize: 16, fontWeight: "bold" }}
            >
              0-2 ans
            </Text>
          </View>
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
