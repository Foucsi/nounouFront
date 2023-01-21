import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

export default function AvisScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerCom}>
        <TextInput
          placeholder="Votre avis ..."
          style={styles.input}
          multiline={true}
        />
        <TouchableOpacity
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
      <ScrollView>
        <Text>liste des avis ici</Text>
      </ScrollView>
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
