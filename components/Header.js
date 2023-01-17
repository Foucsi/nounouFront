import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import fetchIp from "../fetchIp.json";

export default function Header({ navigation }) {
  const [isVisible, setIsVisible] = useState(false);
  const users = useSelector((state) => state.user.value);
  const [image, setImage] = useState();

  useEffect(() => {
    fetch(`http://${fetchIp.myIp}:3000/users/getPhoto/${users.username}`)
      .then((res) => res.json())
      .then((data) => {
        setImage(data.data);
      });
  }, []);

  return (
    <View style={styles.header}>
      <Modal visible={isVisible} animationType="fade" transparent={true}>
        <View
          style={{
            padding: 20,
            backgroundColor: "#fff",
            width: "80%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign
            name="closecircleo"
            size={24}
            color="black"
            onPress={() => setIsVisible(false)}
          />
          <View
            style={{
              height: "80%",
              width: "90%",
              padding: 10,
            }}
          >
            <View
              style={{
                height: 100,
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  height: 100,
                  width: 100,
                }}
              >
                <Image
                  source={{ uri: image }}
                  style={{ height: "100%", width: "100%", borderRadius: "50%" }}
                />
              </View>
              <View>
                <Text
                  style={{ color: "#3A3A3A", fontSize: 18, fontWeight: "bold" }}
                >
                  {users.username.toUpperCase()}
                </Text>
                <Text style={{ color: "#3A3A3A" }}>Mon Espace</Text>
              </View>
            </View>
            <View style={{ paddingTop: 20 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Profil", {
                    name: users.username,
                  });
                  setIsVisible(false);
                }}
              >
                <Text>Voir ou modifier mon profil</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{ alignItems: "center", flexDirection: "row", width: "80%" }}
      >
        <View
          style={{
            width: "20%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => setIsVisible(true)}>
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
