import * as React from "react";
import { StyleSheet } from "react-native";

import ButtonDefault from "../components/ButtonDefault";
import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ButtonDefault icon="receipt" title="Exames" path="/Exames" />
      <ButtonDefault icon="location-on" title="Hospitais" path="/Exames" />
      <ButtonDefault icon="today" title="Agendamento" path="/Exames" />
      <ButtonDefault icon="exit-to-app" title="Sair" path="/Exames" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
