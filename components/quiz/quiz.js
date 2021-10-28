import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert,Button } from "react-native";
import PropTypes from "prop-types";
//import * as Permissions from "expo-permissions";
import { Audio } from "expo-av";
//import * as FileSystem from "expo-file-system";
export default function Quiz({route,navigation}) {
  console.log(route);
  if(route.params===undefined){
    navigation.navigate("Main");
  }
  const recording=null;
  const isSeeking=false;
  const shouldPlayAtEndOfSeek=false;
  const recordingSettings = {
    android: {
      extension: ".3gp",
      outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_WB,
      audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
      sampleRate: 16000,
      numberOfChannels: 2,
      bitRate: 128000,
    },
    ios: {
      extension: ".wav",
      audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
      sampleRate: 44100,
      numberOfChannels: 1,
      bitRate: 128000,
      linearPCMBitDepth: 16,
      linearPCMIsBigEndian: false,
      linearPCMIsFloat: false,
    },
  };


  // this.nav = navigation.getParam("nav");
  // this.category = navigation.getParam("category", "9");

  // this.state = {
  //   no: 1,
  //   correct: 0,
  //   haveRecordingPermissions: false,
  //   category: this.category,
  //   questions: [{ question: "Question", correct_answer: "Option 1" }],
  //   options: [["Option 1", "Option 2", "Option 3", "Option 4"]],
  //   haveRecordingPermissions: false,
  //   isLoading: false,
  //   isPlaybackAllowed: false,
  //   muted: false,
  //   soundPosition: null,
  //   soundDuration: null,
  //   recordingDuration: null,
  //   shouldPlay: false,
  //   isPlaying: false,
  //   isRecording: false,
  //   fontLoaded: false,
  //   shouldCorrectPitch: true,
  //   volume: 1.0,
  //   rate: 1.0,
  // };

  // this.questions = [];

  // fetch(
  //   "https://opentdb.com/api.php?amount=10&encode=url3986&type=multiple&category=" +
  //     this.state.category,
  //   {
  //     method: "GET",
  //   }
  // )
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     this.options1 = [];
  //     console.log(responseJson);
  //     for (var i = 0; i < responseJson.results.length; i++) {
  //       this.questions.push({
  //         question: decodeURIComponent(responseJson.results[i].question),
  //         correct_answer: decodeURIComponent(
  //           responseJson.results[i].correct_answer
  //         ),
  //         incorrect_answers: responseJson.results[i].incorrect_answers.map(
  //           (x) => decodeURIComponent(x)
  //         ),
  //       });
  //       this.options1.push(
  //         decodeURIComponent(responseJson.results[i].correct_answer)
  //       );
  //       responseJson.results[i].incorrect_answers.map((x) =>
  //         this.options1.push(decodeURIComponent(x))
  //       );
  //       this.shuffle(this.options1);
  //       this.setState(
  //         {
  //           questions: this.questions,
  //           options: [...this.state.options, this.options1],
  //         },
  //         () => {
  //           this.options1 = [];
  //         }
  //       );
  //     }
  //     // console.log(this.state.questions)
  //     var f = this.state.options;
  //     f.shift();

  //     this.setState(
  //       {
  //         questions: this.questions,
  //         options: f,
  //       },
  //       () => {
  //         this.playAudio(
  //           this.state.questions[this.state.no - 1].question +
  //             ".     " +
  //             this.state.options[this.state.no - 1][0] +
  //             ".     " +
  //             this.state.options[this.state.no - 1][1] +
  //             ".     " +
  //             this.state.options[this.state.no - 1][2] +
  //             ".or.     " +
  //             this.state.options[this.state.no - 1][3] +
  //             ".     "
  //         );
  //       }
  //     );
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  // this.optionSelected = this.optionSelected.bind(this);
  // this.playAudio = this.playAudio.bind(this);
  // this.playFromString = this.playFromString.bind(this);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Splash"
        onPress={() => navigation.navigate("Splash")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
// Quiz.propTypes = {
//   question: PropTypes.string,
//   questionNo: PropTypes.string,
//   option1: PropTypes.string,
//   option2: PropTypes.string,
//   option3: PropTypes.string,
//   option4: PropTypes.string,
// };
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
  },
  optionView: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
  },
  questionView: {
    flex: 2,
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    borderColor: "#f3f3f3",
    borderWidth: 1,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowColor: "#AB30E6",
    alignSelf: "stretch",
  },
  view: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 8,
    flex: 1,
    padding: 16,
    borderColor: "#f3f3f3",
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    alignContent: "center",
    shadowColor: "#AB30E6",
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
    color: "#000",
    justifyContent: "center",
    textAlign: "center",
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    fontFamily: "AvenirNext-Regular",
    fontSize: 15,
  },
  correct: {
    marginLeft: 20,
    marginRight: 20,
    color: "#8FE90D",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "500",
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    fontFamily: "AvenirNext-Regular",
    fontSize: 15,
  },
  text1: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 16,
    color: "#000",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "500",
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    fontFamily: "AvenirNext-Regular",
    fontSize: 15,
  },
  green: {
    color: "#00ffff",
  },
  red: {
    color: "#ff0000",
  },
});
