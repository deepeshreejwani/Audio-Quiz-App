import React from "react";
import { SafeAreaView,FlatList } from "react-native";
import Menu from "./menu";
const data = [
  { text: "General Knowledge", image: '../../../assets/gk.png', category: "9" },
//   { text: "Books", image: '../../assets/book.png', category: "10" },
//   { text: "Movies", image: "../../assets/movie.png", category: "11" },
//   { text: "Music", image: "../../assets/music.png", category: "12" },
//   { text: "Television", image: "../../assets/tv.png", category: "14" },
//   { text: "Video Games", image: "../../assets/game.png", category: "15" },
//   {
//     text: "Science & Nature",
//     image: "../../assets/nature.png",
//     category: "17",
//   },
//   { text: "Computers", image: "../../assets/computer.png", category: "18" },
//   { text: "Geography", image: "../../assets/earth.png", category: "22" },
//   { text: "History", image: "../../assets/history.png", category: "23" },
//   { text: "Art", image: "../../assets/art.png", category: "25" },
//   { text: "Sport", image: "../../assets/sport.png", category: "21" },
//   { text: "Animals", image: "../../assets/animal.png", category: "27" },
//   { text: "Vehicles", image: "../../assets/car.png", category: "28" },
];

export default function Main({ navigation }) {
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item})=><Menu item={item} navigation={navigation}/>}
        keyExtractor={(item) => item.category}
      />
    </SafeAreaView>
  );
}
