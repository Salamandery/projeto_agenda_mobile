import * as React from "react";
import { StyleSheet, Image } from "react-native";

import img from "../assets/images/profile.jpg";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image source={img} style={styles.imgProfile} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Nome:</Text>
          <Text style={styles.infoText}>Melquezedeque Alves</Text>
          <Text style={styles.infoLabel}>Idade:</Text>
          <Text style={styles.infoText}>20</Text>
          <Text style={styles.infoLabel}>Data de Nascimento:</Text>
          <Text style={styles.infoText}>Ontem mesmo</Text>
          <Text style={styles.infoLabel}>Tipo Sanguíneo:</Text>
          <Text style={styles.infoText}>A</Text>
        </View>
      </View>
      <View style={styles.otherInfoContainer}>
        <Text style={styles.otherInfoLabel}>Email:</Text>
        <Text style={styles.otherInfoText}>melquezedeque@melquenan.com</Text>
        <Text style={styles.otherInfoLabel}>Peso:</Text>
        <Text style={styles.otherInfoText}>100kg</Text>
        <Text style={styles.otherInfoLabel}>Alergia:</Text>
        <Text style={styles.otherInfoText}>
          Melque não tem alergia, melque é melque
        </Text>
        <Text style={styles.otherInfoLabel}>Doença Crônicas:</Text>
        <Text style={styles.otherInfoText}>Melque não fica doente</Text>
        <Text style={styles.otherInfoLabel}>Endereço Residencial:</Text>
        <Text style={styles.otherInfoText}>Rua Melquenan Pessoa</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  profileContainer: {
    marginTop: 15,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: "#3bc9f5",
    height: 140,
    width: 140,
  },
  imgProfile: {
    flex: 1,
    height: 138,
    width: 138,
  },
  infoContainer: {
    marginHorizontal: 5,
  },
  infoLabel: {
    color: "#3bc9f5",
    fontWeight: "bold",
    fontSize: 16,
  },
  infoText: {
    color: "#3784a6",
    fontSize: 14,
  },
  otherInfoContainer: {
    marginTop: 5,
    marginHorizontal: 15,
  },
  otherInfoLabel: {
    marginTop: 5,
    color: "#3784a6",
    fontSize: 12,
  },
  otherInfoText: {
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    borderColor: "#3bc7f5",
    color: "#3784a6",
  },
});
