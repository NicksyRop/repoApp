import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RepositoryList from "./components/RepositoryList ";
import SignIn from "./components/SignIn";
import { useFonts } from "expo-font";
import { NativeBaseProvider } from "native-base";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AppLoading from "expo-app-loading";
const Tab = createMaterialTopTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Robotto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Robotto-light": require("./assets/fonts/Roboto-Light.ttf"),
    "Robotto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Robotto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
    "Robotto-italic": require("./assets/fonts/Roboto-Italic.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator
          style={{
            marginTop: Constants.statusBarHeight,
            backgroundColor: "#24292e",
          }}
        >
          <Tab.Screen name="Repositories" component={RepositoryList} />
          <Tab.Screen name="SignIn" component={SignIn} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
