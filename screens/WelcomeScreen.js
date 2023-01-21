import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { useEffect } from "react";
import Profils from "../components/Profils";
import { useSelector } from "react-redux";
import fetchIp from "../fetchIp.json";
import { addAvis } from "../reducers/users";

export default function WelcomeScreen({ navigation }) {
  const [allProfil, setAllProfil] = useState();
  const users = useSelector((state) => state.user.value);

  useEffect(() => {
    const fecthData = async () => {
      const res = await fetch(`http://${fetchIp.myIp}:3000/users/getAllProfil`);
      const data = await res.json();
      if (data.result) {
        setAllProfil(data.users);
      }
    };
    fecthData();
  }, [users.price, users.photo, users.profil, users.avis]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <View style={styles.mainContainer}>
        <ScrollView style={{ width: "100%" }}>
          <View style={{ alignItems: "center" }}>
            {allProfil ? (
              allProfil.map((profil, index) => {
                return (
                  <Profils
                    key={index}
                    profil={profil}
                    navigation={navigation}
                  />
                );
              })
            ) : (
              <Text>text manquant ...</Text>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  mainContainer: {
    height: "85%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
