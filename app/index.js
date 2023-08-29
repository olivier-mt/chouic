import React from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function index() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        style={{ ...styles.halfView }}
        colors={["#a402ea", "#ef04eb", "#f754b3"]}
      >
        <Link href="/choosePlayers/couple" asChild>
          <TouchableOpacity>
            <Text style={styles.textStyle}>VERSION COUPLE</Text>
          </TouchableOpacity>
        </Link>
      </LinearGradient>

      <LinearGradient
        style={{ ...styles.halfView }}
        colors={["#3b58f9", "#5d9bf7", "#6cbefc"]}
      >
        <Link href="/choosePlayers/group" asChild>
          <TouchableOpacity style={{ ...styles.halfView }}>
            <Text style={styles.textStyle}>VERSION GROUPE</Text>
          </TouchableOpacity>
        </Link>
      </LinearGradient>

      <View style={styles.absoluteView}>
        <View style={styles.parallelepiped}></View>

        <Text style={styles.parallelepipedText}>action ou vérité ?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  halfView: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  absoluteView: {
    position: "absolute",
    width: "80%",
    height: 70,
    top: windowHeight / 2 - 35, // Centré verticalement
    left: windowWidth * 0.1, // Centré horizontalement
    transform: [{ skewX: "-20deg" }], // Inclinaison du parallélépipède

    shadowColor: "#6e6a75",
    shadowOffset: { height: -10, width: -10 },
    shadowRadius: 10,
  },
  parallelepiped: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#1f0ed3",
    width: "100%",
    height: "100%",
    shadowColor: "#6e6a75",
    shadowOffset: { height: -10, width: -10 },
    shadowRadius: 10,
    //transform: [{ skewX: "-1deg" }], // Inclinaison inversée pour la face gauche
  },
  parallelepipedText: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    lineHeight: 70,
    transform: [{ skewX: "20deg" }], // Inclinaison du texte
    color: "white",
    fontFamily: "Inter_900Black",
    fontStyle: "italic",
    fontSize: 20,
  },

  textStyle: {
    color: "white",

    fontFamily: "Inter_900Black",
    //fontStyle: "italic",
    fontSize: 50,
    textAlign: "center",
    textShadowColor: "#6e6a75",
    textShadowOffset: { height: 5, width: 3 },
    textShadowRadius: 2,
    shadowOpacity: 0.05,
  },
});
