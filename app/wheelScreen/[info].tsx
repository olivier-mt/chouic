import React, { useState, useContext, useRef } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Stack, useLocalSearchParams, Link } from "expo-router";

const wheelScreen = () => {
  const { info } = useLocalSearchParams();

  const scrollViewRef = useRef(null);

  console.log("scrollViewRef", scrollViewRef);

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <ScrollView
        horizontal={true}
        scrollEnabled={true}
        ref={scrollViewRef}
        //  showsHorizontalScrollIndicator={true}
      >
        <View style={styles.container}>
          <Text>wheel View</Text>
          <TouchableOpacity onPress={scrollToBottom}>
            <Text>Ça marche</Text>
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.container, backgroundColor: "pink" }}>
          <Text>wheel View 2</Text>
        </View>
        <View style={styles.container}>
          <Text>wheel View</Text>
          <TouchableOpacity>
            <Text>Ça marche</Text>
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.container, backgroundColor: "pink" }}>
          <Text>wheel View 2</Text>
        </View>
        <View style={styles.container}>
          <Text>wheel View</Text>
          <TouchableOpacity>
            <Text>Ça marche</Text>
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.container, backgroundColor: "pink" }}>
          <Text>wheel View 2</Text>
        </View>
        <View style={styles.container}>
          <Text>wheel View</Text>
          <TouchableOpacity>
            <Text>Ça marche</Text>
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.container, backgroundColor: "pink" }}>
          <Text>wheel View 2</Text>
        </View>
        <View style={styles.container}>
          <Text>wheel View</Text>
          <TouchableOpacity>
            <Text>Ça marche</Text>
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.container, backgroundColor: "pink" }}>
          <Text>wheel View 2</Text>
        </View>
        <View style={styles.container}>
          <Text>wheel View</Text>
          <TouchableOpacity>
            <Text>Ça marche</Text>
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.container, backgroundColor: "pink" }}>
          <Text>wheel View 2</Text>
        </View>
        <View style={styles.container}>
          <Text>wheel View</Text>
          <TouchableOpacity>
            <Text>Ça marche</Text>
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.container, backgroundColor: "pink" }}>
          <Text>wheel View 2</Text>
        </View>
        <View style={styles.container}>
          <Text>wheel View</Text>
          <TouchableOpacity>
            <Text>Ça marche</Text>
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.container, backgroundColor: "pink" }}>
          <Text>wheel View 2</Text>
        </View>
        <View style={styles.container}>
          <Text>wheel View</Text>
          <TouchableOpacity>
            <Text>Ça marche</Text>
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.container, backgroundColor: "pink" }}>
          <Text>wheel View 2</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default wheelScreen;

const styles = StyleSheet.create({
  container: {
    height: 1000,
    width: 400,
    backgroundColor: "blue",
  },
});
