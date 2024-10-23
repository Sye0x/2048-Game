import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { moveLeft, moveRight, moveUp, moveDown } from "./moveGrid";
import { addRandomTile } from "./addRandomTile";
import useSwipe from "./useSwipe";

const getTileStyle = (value: any) => {
  switch (value) {
    case 2:
      return { backgroundColor: "#eee4da", color: "#776e65" };
    case 4:
      return { backgroundColor: "#ede0c8", color: "#776e65" };
    case 8:
      return { backgroundColor: "#f2b179", color: "#f9f6f2" };
    case 16:
      return { backgroundColor: "#f59563", color: "#f9f6f2" };
    case 32:
      return { backgroundColor: "#f67c5f", color: "#f9f6f2" };
    case 64:
      return { backgroundColor: "#f75e3b", color: "#f9f6f2" };
    case 128:
      return { backgroundColor: "#edd073", color: "#f9f6f2" };
    case 256:
      return { backgroundColor: "#edcc61", color: "#f9f6f2" };
    case 512:
      return { backgroundColor: "#edc850", color: "#f9f6f2" };
    case 1024:
      return { backgroundColor: "#edc53f", color: "#f9f6f2" };
    case 2048:
      return { backgroundColor: "#edc22e", color: "#f9f6f2" };
    case 4098:
      return { backgroundColor: "#edc22e", color: "#f9f6f2" };
    case 8192:
      return { backgroundColor: "#edc22e", color: "#f9f6f2" };
    default:
      return { backgroundColor: "#cdc1b4", color: "#776e65" }; // For null or undefined values
  }
};

const Board = () => {
  const initializeGrid = () => {
    const emptyGrid = Array(4)
      .fill(null)
      .map(() => Array(4).fill(null));

    const placeRandomTwo = (grid: any) => {
      let randomRow, randomCol;
      do {
        randomRow = Math.floor(Math.random() * 4);
        randomCol = Math.floor(Math.random() * 4);
      } while (grid[randomRow][randomCol] !== null);
      grid[randomRow][randomCol] = 2;
    };

    placeRandomTwo(emptyGrid);
    placeRandomTwo(emptyGrid);

    return emptyGrid;
  };

  const [grid, setGrid] = useState(initializeGrid);

  const handleMove = (newGrid: any) => {
    if (JSON.stringify(grid) !== JSON.stringify(newGrid)) {
      setGrid(addRandomTile(newGrid));
    }
  };

  const panResponder = useSwipe(
    () => handleMove(moveLeft(grid)),
    () => handleMove(moveRight(grid)),
    () => handleMove(moveUp(grid)),
    () => handleMove(moveDown(grid))
  );

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      {grid.map((row, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {row.map((box, boxIndex) => {
            const tileStyle = getTileStyle(box); // Get the style based on the tile value
            return (
              <View
                style={[
                  styles.box,
                  { backgroundColor: tileStyle.backgroundColor },
                ]}
                key={boxIndex}
              >
                <Text style={[styles.boxText, { color: tileStyle.color }]}>
                  {box !== null ? box : ""}
                </Text>
              </View>
            );
          })}
        </View>
      ))}
    </View>
  );
};

export default Board;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(10),
    width: hp(48.5),
    height: hp(48.5),
    backgroundColor: "#FCAE1E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: hp(4),
  },
  row: {
    flexDirection: "row",
  },
  box: {
    width: hp(11),
    height: hp(11),
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: hp(1.5),
  },
  boxText: {
    fontSize: hp(3), // Adjust text size for better visibility
    fontWeight: "bold",
  },
});
