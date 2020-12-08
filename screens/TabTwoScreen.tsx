import * as React from "react";
import { StyleSheet, Image, TextInput } from "react-native";

import img from "../assets/images/profile.jpg";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  const [nome, setNome] = React.useState("Rodolfo Marques Ferreira de Abreu");
  const [idade, setIdade] = React.useState("");
  const [dtNascimento, setDtNascimento] = React.useState("");
  const [tpSanguineo, setTpSanguineo] = React.useState("");
  
  const [email, setEmail] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [alergias, setAlergias] = React.useState("");
  const [doencas, setDoencas] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image source={img} style={styles.imgProfile} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Nome:</Text>
          <TextInput 
            multiline
            placeholder="NOME COMPLETO" 
            style={[styles.infoText, {height: 40}]} 
            value={nome} 
            onChangeText={setNome} 
          />
          <Text style={styles.infoLabel}>Idade:</Text>
          <TextInput 
            placeholder="IDADE"
            style={styles.infoText} 
            value={idade} 
            onChangeText={setIdade} 
          />
          <Text style={styles.infoLabel}>Data de Nascimento</Text>
          <TextInput 
            placeholder="DATA DE NASCIMENTO"
            style={styles.infoText} 
            value={dtNascimento} 
            onChangeText={setDtNascimento} 
          />
          <Text style={styles.infoLabel}>Tipo Sanguíneo:</Text>
          <TextInput 
            placeholder="TIPO SANGUINEO"
            style={styles.infoText} 
            value={tpSanguineo} 
            onChangeText={setTpSanguineo} 
          />
        </View>
      </View>
      <View style={styles.otherInfoContainer}>
        <Text style={styles.otherInfoLabel}>E-mail:</Text>
        <TextInput 
          placeholder="E-MAIL"
          style={styles.otherInfoText} 
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.otherInfoLabel}>Peso:</Text>
        <TextInput 
          placeholder="PESO EM KG"
          style={styles.otherInfoText} 
          value={peso}
          onChangeText={setPeso}
        />
        <Text style={styles.otherInfoLabel}>Alergia:</Text>
        <TextInput 
          placeholder="ALERGIAS"
          style={styles.otherInfoText} 
          value={alergias}
          onChangeText={setAlergias}
        />
        <Text style={styles.otherInfoLabel}>DoençaS Crônicas:</Text>
        <TextInput 
          placeholder="DOENÇAS CRÔNICAS"
          style={styles.otherInfoText} 
          value={doencas}
          onChangeText={setDoencas}
        />
        <Text style={styles.otherInfoLabel}>Endereço Residencial:</Text>
        <TextInput 
          placeholder="ENDEREÇO RESIDENCIAL"
          style={styles.otherInfoText} 
          value={endereco}
          onChangeText={setEndereco}
        />
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
    alignItems: 'center'
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: "#3bc9f5",
    height: 172,
    width: 147,
  },
  imgProfile: {
    flex: 1,
    height: 172,
    width: 145,
  },
  infoContainer: {
    marginHorizontal: 5,
    width: 180
  },
  infoLabel: {
    color: "#3bc9f5",
    fontWeight: "bold",
    fontSize: 16,
  },
  infoText: {
    color: "#3784a6",
    fontSize: 14,
    alignSelf: 'stretch'
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
