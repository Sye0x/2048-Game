import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Board = () => {
  return (
    <View style={styles.container}>
      <Text>Board</Text>
    </View>
  );
};

export default Board;
const styles = StyleSheet.create({
  container: {
    width: wp(80),
    height: wp(80),
    backgroundColor: "#2b2b2b",
  },
});
