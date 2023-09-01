import React, { useContext } from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { player as playerType } from "../app/Types";
import { PlayersContext } from "../app/functions";
import { Entypo, Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

const Player = ({ player, index }: { player: playerType; index: string }) => {
  const { playersArr, setPlayersArr } = useContext(PlayersContext);

  const deleteUser = () => {
    const indexNum = parseInt(index);

    const arr = [...playersArr];

    arr.splice(indexNum, 1);

    setPlayersArr(arr);
  };

  const blue = "#272487";
  const pink = "#f73693";
  const lightBlue = "#71c4fc";

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: player.gender === "man" ? blue : "white",
      }}
    >
      <View
        style={{
          ...styles.heartView,
          backgroundColor: player.gender === "man" ? "white" : blue,
        }}
      >
        <Text>
          <Entypo
            name="heart"
            size={30}
            color={player.gender === "man" ? pink : lightBlue}
          />
        </Text>
      </View>
      <Text
        style={{
          color: player.gender === "man" ? "white" : blue,
          fontWeight: "800",
        }}
      >
        {player.name}
      </Text>
      <TouchableOpacity onPress={deleteUser}>
        <Text>
          <Entypo
            name="cross"
            size={24}
            color={player.gender === "man" ? "white" : "black"}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: 60,
    backgroundColor: "white",
    width: screenWidth,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  heartView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "blue",
  },
});
