import React, { useContext } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { usePathname, Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import { PlayersContext } from "../_layout";

const choosePlayer = () => {
  const { theme, setTheme } = useContext(PlayersContext);

  const pathname = usePathname();
  const { info } = useLocalSearchParams();

  console.log("pathname", pathname);
  console.log("theme", theme);

  return (
    <LinearGradient
      colors={
        info === "couple"
          ? ["#a402ea", "#ef04eb", "#f754b3"]
          : ["#3b58f9", "#5d9bf7", "#6cbefc"]
      }
      style={{
        ...styles.container,
        //  backgroundColor: info === "couple" ? `pink` : "blue",
      }}
    >
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

      <Link
        style={{
          top: 120,
          fontFamily: "Inter_900Black",
          color: "white",
        }}
        href={`/configPlayer/${info}`}
      >
        Ajouter un joueur
      </Link>
      <Text
        style={{
          top: 200,
        }}
      >
        info:{info}
      </Text>
      <TouchableOpacity
        style={{ top: 500 }}
        onPress={() => setTheme("ligth man")}
      >
        <Text> change</Text>
      </TouchableOpacity>
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
