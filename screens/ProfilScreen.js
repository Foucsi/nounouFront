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

export default function ProfilScreen({ navigation }) {
  const users = useSelector((state) => state.user.value);
  const [images, setImage] = useState(users.photo);
  const route = useRoute();
  const { name } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://192.168.1.51:3000/users/getPhoto/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setImage(data.data);
      });
  }, [users.photo]);

  const uploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      fetch(`http://172.20.10.2:3000/users/addPhoto/${users.token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ photo: result.assets[0].uri }),
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
            <Entypo name="upload-to-cloud" size={24} color="#1282A2" />
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
