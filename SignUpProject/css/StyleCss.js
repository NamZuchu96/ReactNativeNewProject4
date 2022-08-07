import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
const stylesCSS = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: `yellow`,
  },

  login: {
    borderRadius: 7,
    width: `20%`,
    textAlign: "center",
    overflow: "hidden",
    backgroundColor: `green`,
    padding: 5,
  },

  input: {
    width: `80%`,
    height: 40,
    borderRadius: 7,
    borderWidth: 1,
    overflow: `hidden`,
    flexDirection: "row",
    padding: 5,
    marginBottom: 5,
  },
});
export default stylesCSS;
