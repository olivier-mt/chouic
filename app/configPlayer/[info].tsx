import React, { useState, useContext } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Stack, useLocalSearchParams, Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { PlayersContext } from "../PlayersContext";

const { width, height } = Dimensions.get("window");

const blue = "#272487";

const configPlayer = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("woman");
  const [preferences, setPreferences] = useState("");

  const { info } = useLocalSearchParams();

  const { playersArr, setPlayersArr } = useContext(PlayersContext);

  const addUser = () => {
    let arr = [...playersArr];

    arr.push({ name: name, gender: gender, preferences: preferences });
    setPlayersArr && setPlayersArr(arr);
  };

  const setAddButton = () => {
    if (name.length > 0 && preferences.length > 0) {
      return false;
    } else return true;
  };

  console.log("arr", playersArr);

  return (
    <LinearGradient
      style={{
        ...styles.container,
      }}
      colors={
        info === "couple"
          ? ["#a402ea", "#ef04eb", "#f754b3"]
          : ["#3b58f9", "#5d9bf7", "#6cbefc"]
      }
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <Text
        style={{
          fontFamily: "Inter_900Black",
          fontSize: 20,
          color: "white",
          top: 25,
        }}
      >
        Ajouter un joueur
      </Text>
      <Link
        style={{
          left: 150,
        }}
        href="../"
      >
        <Text>
          <Entypo name="cross" size={24} color="white" />
        </Text>
      </Link>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder={
            gender === "man" ? "Prénom de l'homme" : "Prénom de la femme"
          }
          placeholderTextColor="lightgrey"
          onChangeText={setName}
        />
        <View style={styles.genderView}>
          <TouchableOpacity
            style={
              gender === "man"
                ? styles.genderChoiceHalfActive
                : styles.genderChoiceHalfInactive
            }
            onPress={() => setGender("man")}
          >
            <Text
              style={gender === "man" ? styles.textActive : styles.textInactive}
            >
              Homme
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              gender === "woman"
                ? styles.genderChoiceHalfActive
                : styles.genderChoiceHalfInactive
            }
            onPress={() => setGender("woman")}
          >
            <Text
              style={
                gender === "woman" ? styles.textActive : styles.textInactive
              }
            >
              Femme
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontWeight: "600",
            marginTop: 10,
          }}
        >
          J'accepte d'intéragir avec
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 30,
          }}
        >
          <View style={styles.preferencesView}>
            <TouchableOpacity
              style={{
                ...styles.preferencesBtn,
                backgroundColor: preferences === "man" ? blue : "white",
              }}
              onPress={() => {
                setPreferences("man");
              }}
            >
              <AntDesign name="heart" size={40} color="lightblue" />
            </TouchableOpacity>
            <Text style={styles.preferencesText}>Des hommes</Text>
          </View>
          <View style={styles.preferencesView}>
            <TouchableOpacity
              style={{
                ...styles.preferencesBtn,
                backgroundColor: preferences === "woman" ? blue : "white",
              }}
              onPress={() => {
                setPreferences("woman");
              }}
            >
              <AntDesign name="heart" size={40} color="lightpink" />
            </TouchableOpacity>
            <Text style={styles.preferencesText}>Des femmes</Text>
          </View>
          <View style={styles.preferencesView}>
            <TouchableOpacity
              style={{
                ...styles.preferencesBtn,
                flexDirection: "row",
                backgroundColor: preferences === "both" ? blue : "white",
              }}
              onPress={() => {
                setPreferences("both");
              }}
            >
              <AntDesign name="heart" size={30} color="lightblue" />
              <AntDesign name="heart" size={30} color="lightpink" />
            </TouchableOpacity>
            <Text style={styles.preferencesText}>Les deux</Text>
          </View>
        </View>
      </View>

      <Link href={"../"} asChild>
        <TouchableOpacity
          style={
            setAddButton() === true
              ? styles.addBtnInactive
              : styles.addBtnActive
          }
          onPress={addUser}
          disabled={setAddButton()}
        >
          <Text
            style={{
              fontWeight: "900",
              color: setAddButton() === true ? "grey" : "blue",
            }}
          >
            Ajouter
          </Text>
        </TouchableOpacity>
      </Link>
    </LinearGradient>
  );
};

export default configPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  textInput: {
    borderColor: "black",
    width: width * 0.8,
    height: 55,
    marginTop: 20,
    textAlign: "center",
    fontFamily: "Inter_900Black",
    fontSize: 20,
    color: "white",
    backgroundColor: "#4542e5",
  },
  genderView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 55,
    marginTop: 30,
  },
  genderChoiceHalfInactive: {
    backgroundColor: "lightgrey",
    width: (width * 0.8) / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  genderChoiceHalfActive: {
    backgroundColor: "white",
    width: (width * 0.8) / 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: blue,
  },

  preferencesView: {
    display: "flex",
    alignItems: "center",
  },
  preferencesBtn: {
    display: "flex",
    backgroundColor: "white",
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  preferencesText: {
    color: "lightgrey",
    marginTop: 10,
    fontWeight: "bold",
  },

  addBtnActive: {
    position: "absolute",
    top: "85%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    backgroundColor: "white",
    width: width * 0.8,
    borderWidth: 3,
    borderColor: "blue",
    borderRadius: 10,
  },

  addBtnInactive: {
    position: "absolute",
    top: "85%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    backgroundColor: "white",
    width: width * 0.8,
    borderColor: "grey",
    borderRadius: 10,
  },
  textActive: {
    color: blue,
    fontWeight: "700",
  },
  textInactive: {
    color: "grey",
    fontWeight: "700",
  },
});
