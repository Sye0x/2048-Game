import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Feather from "@expo/vector-icons/Feather";
const Scoreboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingcontainer}>
        <Text style={styles.headingtexts}>2048</Text>
      </View>
      <View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.scorecontainer}>
            <Text style={styles.texts}>Score</Text>
            <Text style={styles.texts}>0</Text>
          </View>
          <View style={styles.bestscorecontainer}>
            <Text style={[styles.texts, { fontSize: wp(5) }]}>Best Score</Text>
            <Text style={styles.texts}>0</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View style={styles.optionscontainer}>
            <FontAwesome name="volume-up" size={24} color="white" />
          </View>
          <View style={styles.optionscontainer}>
            <MaterialIcons name="undo" size={24} color="white" />
          </View>
          <View style={styles.optionscontainer}>
            <FontAwesome5 name="undo" size={20} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Scoreboard;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headingcontainer: {
    backgroundColor: "#FCAE1E",
    height: wp(40),
    width: wp(40),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(5),
  },
  headingtexts: {
    fontSize: wp(12),
    color: "white",
    fontWeight: "600",
  },
  texts: {
    fontSize: wp(6),
    color: "white",
    fontWeight: "600",
  },
  scorecontainer: {
    backgroundColor: "#FCAE1E",
    height: wp(22),
    width: wp(22),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(5),
    marginHorizontal: wp(2),
  },
  bestscorecontainer: {
    backgroundColor: "#FCAE1E",
    height: wp(22),
    width: wp(30),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(5),
  },
  optionscontainer: {
    backgroundColor: "#2b2b2b",
    marginTop: hp(2),
    marginHorizontal: wp(2),
    height: wp(13),
    width: wp(13),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(3),
  },
});
