import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import stylesCSS from "../css/StyleCss";
import { Text, TextInput, View } from "react-native";
import TextBox from "react-native-password-eye";
const Login = ({ navigation }) => {
  const { userName, setUserName } = useState(``);
  const { password, setPassword } = useState(``);
  return (
    <View style={stylesCSS.container}>
      <TextBox
        style={stylesCSS.input}
        placeholder="Press UserName"
        onChangeText={(text) => text}
      />
      <TextBox
        style={stylesCSS.input}
        secureTextEntry="true"
        placeholder="Press Password"
        onChangeText={(text) => text}
      />
      <Text
        style={stylesCSS.login}
        onPress={() => navigation.replace(`Container`)}
      >
        Login
      </Text>
    </View>
  );
};

export default Login;
