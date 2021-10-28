import React, { useEffect, useState } from "react";
import {View,Image, TouchableOpacity, StyleSheet,Text,Alert } from "react-native";
import * as SecureStore from "expo-secure-store";
const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 16,
    borderColor: "#f3f3f3",
    borderWidth: 1,
    backgroundColor: "#fff",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowColor: "#AB30E6",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    color: "#000",
    fontWeight: "500",
    fontSize: 15,
  },
});

const Menu= (props) => {
  //console.log(props);
  const [played, setPlayed] = useState(false);
  const [text, setText] = useState(props.item.text);
  const faded = () => {
    if (played) {
      return {
        opacity: "0.7",
        backgroundColor: "#ddd",
        shadowColor: "#000",
      };
    }
    return {};
  };
  const arrowTapped = () => {
    console.log(played);
    if (played) {
      Alert.alert(
        item.text,
        "Already Played. Play other category now!",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
        ],
        { cancelable: true }
      );
    } else {
      props.navigation.navigate("Quiz", { category: props.item.category});
    }
  };
  useEffect(() => {
    //console.log(props.item);
    const result = SecureStore.getItemAsync("@" + props.item.category);
    //console.log(result);
    if (result != null) {
      setPlayed(true);
      setText(text + "\n" + result + "/10");
    }
  });
  return (
    <View style={[styles.container, faded()]}>
      <Image
        style={{ width: 50, height: 50, marginLeft: 16, marginRight: 16 }}
        source={{uri:props.item.image}}
      ></Image>
      <Text style={styles.text}>{props.item.text}</Text>
      <TouchableOpacity onPress={() => console.log(1)}>
        <Image
          style={{ width: 30, height: 30, marginLeft: 16, marginRight: 16 }}
          source={require("../../assets/arrow.png")}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
