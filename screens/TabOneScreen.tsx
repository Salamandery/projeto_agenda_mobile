import * as React from "react";
import { StyleSheet } from "react-native";

import ButtonDefault from "../components/ButtonDefault";
import { View } from "../components/Themed";

import api from '../services/api';

export default function TabOneScreen() {
  async function teste() {
    const res = await api.get('AtomicCollect');
    console.log(res);
  }
  teste(); 
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
