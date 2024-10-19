import { Text, View, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function Index() {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: wp(90),
          flexDirection: "row",
          justifyContent: "flex-end",
          marginBottom: hp(1.5),
        }}
      >
        <Feather
          name="home"
          size={24}
          color="black"
          style={{ marginHorizontal: wp(5) }}
        />
        <AntDesign name="setting" size={24} color="black" />
      </View>

      <Scoreboard />
    </View>
  );
}
import scoreboard from "@/components/scoreboard";
import Scoreboard from "@/components/scoreboard";
const styles = StyleSheet.create({
  container: {
    marginTop: hp(6),
  },
});
