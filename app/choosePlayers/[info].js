import React, { useContext } from "react";
import { View, Dimensions, StyleSheet, SafeAreaView } from "react-native";
import { usePathname, Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import { PlayersContext } from "../functions";
import Player from "../../components/Player";
const screenWidth = Dimensions.get("window").width;

const choosePlayer = () => {
  const { playersArr, setPlayersArr } = useContext(PlayersContext);

  const pathname = usePathname();
  const { info } = useLocalSearchParams();

  const displayPlayers = () => {
    return (
      <View style={{ marginTop: 30 }}>
        {playersArr.length > 0 &&
          playersArr.map((player, index) => (
            <Player key={index} player={player} index={index} />
          ))}
      </View>
    );
  };

  return (
    <LinearGradient
      colors={
        info === "couple"
          ? ["#a402ea", "#ef04eb", "#f754b3"]
          : ["#3b58f9", "#5d9bf7", "#6cbefc"]
      }
      style={{
        ...styles.container,
      }}
    >
      <SafeAreaView>
        <Stack.Screen
          options={{
            title: info === "couple" ? `En Couple` : "En Groupe",
            headerTransparent: true,
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontFamily: "Inter_900Black",
              fontSize: 20,
            },
          }}
        />

        <View>{displayPlayers()}</View>
        <View
          style={{
            display: "flex",
            // backgroundColor: "blue",
            width: screenWidth,
            alignItems: "center",
          }}
        >
          <Link
            style={{
              marginTop: 20,
              fontFamily: "Inter_900Black",
              color: "white",
              //  backgroundColor: "green",
            }}
            href={`/configPlayer/${info}`}
          >
            Ajouter un joueur
          </Link>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default choosePlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
  background: {
    flex: 1,

    alignItems: "center",
  },
});
