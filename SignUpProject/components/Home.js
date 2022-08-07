import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import stylesCSS from "../css/StyleCss";

const Home = ({ navigation }) => {
  return (
    <View style={stylesCSS.container}>
      <Text style={stylesCSS.login} onPress={() => navigation.replace(`Login`)}>
        Home
      </Text>
    </View>
  );
};
export default Home;
