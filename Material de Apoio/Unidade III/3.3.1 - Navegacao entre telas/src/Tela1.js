import React from 'react';
import { View, Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const Tela1 = () => {

  const navigation = useNavigation();

  const navegar = () => {

    navigation.navigate('Tela2');

  }


  return (
    <View>
      <Text>Tela 01</Text>
      <Button title="IR tela 2" onPress={navegar} />
    </View>
  );
}

export default Tela1;