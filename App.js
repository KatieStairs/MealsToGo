import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/components/screens/restaurants.screen";
// import { StatusBar, StyleSheet, Text, View } from "react-native";
// import { SafeAreaView } from "react-native";
// import { Searchbar } from "react-native-paper";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
