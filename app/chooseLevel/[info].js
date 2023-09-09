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
import Carousel, { Pagination, PaginationLight } from "react-native-x-carousel";
import funView from "../chooseLevel/funView";
import { Octicons } from "@expo/vector-icons";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const DATA = [
  {
    smilley: <Octicons name="smiley" size={100} color="white" />,
    name: "Fun",
    description: "Le numéro idéal pour commencer en douceur entre pote",
    index: "1",
  },
];

const chooseLevel = () => {
  const { info } = useLocalSearchParams();

  const renderItem = (data) => (
    <View key={data.index} style={styles.item}>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={{
            backgroundColor: "red",
            marginTop: screenHeight * 0.35,
          }}
        >
          {data.smilley}
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 900,
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
            backgroundColor: "red",
            textAlign: "center",
            fontWeight: 600,
            marginTop: 20,
            color: "white",
          }}
        >
          {data.description}
        </Text>
      </View>

      <View>
        <Text>Jouer</Text>
      </View>
    </View>
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
  safeView: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    display: "flex",
    alignItems: "center",
    //  justifyContent: "center",
    backgroundColor: "pink",
    height: screenHeight,
    width: screenWidth,
  },
});

export default chooseLevel;
