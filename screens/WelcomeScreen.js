import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import { useEffect } from "react";
import Profils from "../components/Profils";

export default function WelcomeScreen({ navigation }) {
  const images = [
    "https://images.unsplash.com/photo-1583653319049-4db347571740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8MTQwMTcxMnx8ZW58MHx8fHw%3D&w=1000&q=80",
    "https://img.static-rmg.be/a/view/q75/w4000/h2667/4779070/2135445-jpg.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY3TCE94CXtQ2wAs1kTVLg6fRym18e9-6fiw&usqp=CAU",
    "https://i.pinimg.com/564x/82/f0/97/82f0979c0934212e303af2fe6707e1dd.jpg",
    "https://i.pinimg.com/564x/74/f3/ad/74f3ada6009269bb8f359f5c0a0a6601.jpg",
    "https://i.pinimg.com/564x/ed/dd/27/eddd279b5b74950e3590cc1a92bb4ba7.jpg",
    "https://i.pinimg.com/474x/31/31/a5/3131a51d5077aaae22d46d69eace1bfc.jpg",
    "https://i.pinimg.com/564x/03/a8/9e/03a89ecf6b1aa248e56c2fda651b7d92.jpg",
    "https://i.pinimg.com/564x/b6/9d/e6/b69de628eb90bf5502d6869eaac1f178.jpg",
    "https://i.pinimg.com/736x/0b/8c/0a/0b8c0a5340d62457ff521598a9fdd9a7.jpg",
  ];
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
  }, []);

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
                    images={images}
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
