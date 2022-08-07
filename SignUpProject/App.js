import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import stylesCSS from "./css/StyleCss";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Container from "./components/Container";
import Home from "./components/Home";
import Profile from "./components/Profile";
const Tab = createBottomTabNavigator();
const StackNavigation = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator>
        <StackNavigation.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <StackNavigation.Screen
          name="Container"
          component={Container}
          options={{ headerShown: false }}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}
