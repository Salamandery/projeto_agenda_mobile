import * as React from "react";
import { StackScreenProps } from '@react-navigation/stack';
import { TextInput } from 'react-native';
import { View } from "../../components/Themed";
import { styles } from './styles';

import { RootStackParamList } from '../../types';

export default function Login({
  navigation,
}: StackScreenProps<RootStackParamList, 'Login'>) {
  const [usuario, setUsuario] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.Input}
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput 
        style={styles.Input}
        value={password}
        onChangeText={setPassword}
      />
    </View>
  );
}


