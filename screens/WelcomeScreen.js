import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { useEffect } from "react";
import Profils from "../components/Profils";

export default function WelcomeScreen() {
  const [allProfil, setAllProfil] = useState();

  useEffect(() => {
    const fecthData = async () => {
      const res = await fetch("http://172.20.10.2:3000/users/getAllProfil");
      const data = await res.json();
      if (data.result) {
        setAllProfil(data.users);
      }
    };
    fecthData();
  }, [allProfil]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContainer}>
        <ScrollView>
          {allProfil ? (
            allProfil.map((profil, index) => {
              return <Profils key={index} profil={profil} />;
            })
          ) : (
            <Text>text manquant ...</Text>
          )}
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
