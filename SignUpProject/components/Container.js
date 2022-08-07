import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import stylesCSS from "../css/StyleCss";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./Profile";
import Home from "./Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Tab = createBottomTabNavigator();
import IConAntDesign from "react-native-vector-icons/AntDesign";
import IconIonicons from "react-native-vector-icons/Ionicons";
const Container = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarActiveTintColor: `blue`,
        tabBarInactiveTintColor: `red`,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <IConAntDesign name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <IconIonicons name="ios-person" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Profile}
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: ({ color }) => (
            <IconIonicons name="ios-person" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Container;
