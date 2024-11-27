//The Game work as it should but
//The score calculation funtionality is not added
//also the game logic is also made bt CHATGPT
//which made me try to learn JS after getting firm grasp of JS
//Will attempt to make this app in future

import { Text, View, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Board from "../components/Board";
import Scoreboard from "@/components/scoreboard";

export default function Index() {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: wp(100),
          flexDirection: "row",
          justifyContent: "flex-end",
          marginBottom: hp(1.5),
        }}
      >
        <Feather name="home" size={24} color="black" />
        <AntDesign
          name="setting"
          size={24}
          color="black"
          style={{ marginHorizontal: wp(5) }}
        />
      </View>

      <Scoreboard />
      <Board />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp(6),
  },
});
