import * as React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "../../components/Themed";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

import { RootStackParamList } from "../../types";

import api from "../../services/api";

export default function Login({
  navigation,
}: StackScreenProps<RootStackParamList, "Login">) {
  const [usuario, setUsuario] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handlerEnterPress = React.useCallback(async () => {
    const res = await api.post("/session", {
      login: usuario,
      password,
      company: 1,
    });
    console.log(res);
  }, [usuario, password]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="USUÁRIO"
        style={styles.Input}
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        placeholder="SENHA"
        style={styles.Input}
        value={password}
        onChangeText={setPassword}
      />

      <Text>Esqueceu sua senha?</Text>

      <View style={[stylesButton.container]}>
        <TouchableOpacity
          style={stylesButton.buttonContainer}
          onPress={handlerEnterPress}
        >
          <MaterialIcons name={"location-on"} size={24} color="#fff" />
          <Text
            style={[
              stylesButton.homeScreenFilename,
              stylesButton.codeHighlightText,
            ]}
          >
            ENTRAR
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const stylesButton = StyleSheet.create({
  container: {
    backgroundColor: "#3784a6",
    borderColor: "#3784a6",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 30,
    alignItems: "flex-start",
  },
  codeHighlightText: {
    color: "#fff",
  },
  homeScreenFilename: {
    marginVertical: 7,
    fontSize: 18,
    marginHorizontal: 8,
    color: "#3784a6",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
});
