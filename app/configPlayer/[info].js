import React, { useState, useContext } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import {
  usePathname,
  Stack,
  useLocalSearchParams,
  Link,
  router,
} from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const configPlayer = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("woman");
  const [preferences, setPreferences] = useState("");

  const { info } = useLocalSearchParams();

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
          top: 20,
        }}
      >
        Ajouter un joueur
      </Text>
      <Link
        style={{
          left: 150,
          color: "white",
          fontFamily: "Inter_900Black",
          fontSize: 20,
        }}
        href="../"
      >
        X
      </Link>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Prénom de la femme"
          placeholderTextColor="lightgrey"
          onChangeText={setName}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "green",
            justifyContent: "space-between",
            height: 55,
          }}
        >
          <TouchableOpacity
            style={{ ...styles.genderChoiceHalf, backgroundColor: "green" }}
            onPress={() => setGender("man")}
          >
            <Text>Homme</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.genderChoiceHalf}
            onPress={() => setGender("woman")}
          >
            <Text>Femme</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontWeight: 600,
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
              style={styles.preferencesBtn}
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
              style={styles.preferencesBtn}
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
              style={{ ...styles.preferencesBtn, flexDirection: "row" }}
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

        <Text>{gender}</Text>
        <Text>{name}</Text>
        <Text>{preferences}</Text>
      </View>
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
    // borderWidth: 1,
    width: width * 0.8,
    height: 55,
    marginTop: 20,
    textAlign: "center",
    fontFamily: "Inter_900Black",
    fontSize: 20,
    color: "white",
    backgroundColor: "#4542e5",
  },
  genderChoiceHalf: {
    backgroundColor: "red",
    width: (width * 0.8) / 2,
    alignItems: "center",
    justifyContent: "center",
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
});
