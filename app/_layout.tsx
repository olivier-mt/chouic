import React, { createContext, useContext, useState } from "react";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { PlayersContext } from "./functions";

export default function Layout() {
  const [playersArr, setPlayersArr] = useState([]);

  const obj = { playersArr, setPlayersArr };

  return (
    <PlayersContext.Provider value={obj}>
      <Stack
        // https://reactnavigation.org/docs/headers#sharing-common-options-across-screens
        screenOptions={{
          //   headerStyle: {  backgroundColor: "#f4511e" },
          headerTintColor: "black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/* Optionally configure static options outside the route. */}
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="choosePlayers/[info]" options={{}} />

        <Stack.Screen
          name="configPlayer/[info]"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
      </Stack>
    </PlayersContext.Provider>
  );
}
