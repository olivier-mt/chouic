import React, { useState, useContext } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Stack, useLocalSearchParams, Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Entypo } from "@expo/vector-icons";
import PagerView from "react-native-pager-view";
import Carousel, { PaginationLight } from "react-native-x-carousel";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

type Data = {
  smilley: any;
  name: string;
  description: string;
  index: string;
};

const DATA: Data[] = [
  {
    smilley: <Octicons name="smiley" size={100} color="white" />,
    name: "Fun",
    description:
      "Le niveau idéal pour commencer en douceur entre pote et briser la glace",
    index: "1",
  },
  {
    smilley: <FontAwesome5 name="smile-wink" size={100} color="white" />,
    name: "Soft",
    description:
      "Des gages parfaits pour débuter la soirée et réchauffer l'ambiance",
    index: "2",
  },
];

const chooseLevel = () => {
  const { info } = useLocalSearchParams();

  console.log("info", info);

  const renderItem = (data: Data) => (
    <LinearGradient
      key={data.index}
      colors={
        data.index === "1"
          ? ["#5d9bf7", "#6cbefc"]
          : ["#fc6e3f", "#ffab3d", "#ffeb87"]
      }
      style={{
        ...styles.container,
      }}
    >
      <View
      // key={data.index}

      //   style={styles.item}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginTop: screenHeight * 0.35,
            }}
          >
            {data.smilley}
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "900",
              marginTop: 10,
              color: "white",
            }}
          >
            {data.name}
          </Text>
          <Text
            style={{
              width: screenWidth * 0.8,
              alignItems: "center",
              textAlign: "center",
              fontWeight: "800",
              marginTop: 20,
              color: "white",
            }}
          >
            {data.description}
          </Text>

          <Link href={`/wheelScreen/${info}`} asChild>
            <TouchableOpacity style={styles.startBtn}>
              <Text
                style={{
                  fontWeight: "900",
                  color: "blue",
                }}
              >
                Jouer
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </LinearGradient>
  );

  return (
    <View style={styles.safeView}>
      <Stack.Screen
        options={{
          title: "",
          headerBackTitle: "",
          headerTransparent: true,
          headerTintColor: "white",
        }}
      />
      <Carousel
        style={{
          flex: 1,
          backgroundColor: "red",
        }}
        pagination={PaginationLight}
        renderItem={renderItem}
        data={DATA}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,

    // alignItems: "center",
  },
  safeView: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "pink",
    height: screenHeight,
    width: screenWidth,
  },

  startBtn: {
    backgroundColor: "white",
    height: 55,
    width: 250,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default chooseLevel;
