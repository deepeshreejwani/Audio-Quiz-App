import React, { useEffect } from "react";
import { Platform, StyleSheet, Image, Text, View } from "react-native";
import * as Speech from 'expo-speech';
const instructions = Platform.select({
  ios: "iOS",
  android: "Android",
  web: "Web",
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 65,
    textAlign: "center",
    color: "#AB30E6",
  },
  instructions: {
    textAlign: "center",
    marginTop: -16,
    color: "#3769DB",
    fontSize: 20,
  },
});
export default function Splash({ navigation }) {
  const playAudio = (text) => {
    console.log(text);
    Speech.speak(text);
    setTimeout(() => {
      navigation.navigate("Main");
    }, 5000);
  };

  useEffect(() => {
    playAudio("Welcome To Audio Quiz App!");
  });
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../../assets/bulb.png")}
      ></Image>
      <Text style={styles.title}>
        Audio Quiz{"\n"}
        <Text style={styles.instructions}>{instructions} Version</Text>
      </Text>
    </View>
  );
}
