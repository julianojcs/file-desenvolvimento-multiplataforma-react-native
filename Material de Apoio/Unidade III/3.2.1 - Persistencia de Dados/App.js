import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

  const [telefone, setTelefone] = useState('');


  useEffect(() => {

    AsyncStorage.getItem('@telefone')
      .then((res) => setTelefone(res))
      .catch((err) => alert('Erro ao recuperar: ' + err))

  }, [])

  const salvar = () => {
    AsyncStorage.setItem('@telefone', telefone)
      .then((res) => alert('ok'))
      .catch((err) => alert('Erro ao salvar: ' + err))
  }


  return (
    <View >

      <Text>Digite seu telefone</Text>

      <TextInputMask
        style={styles.input}
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99)'
        }}
        value={telefone}
        onChangeText={(txt) => setTelefone(txt)}
      />

      <Text>{telefone}</Text>

      <Button title="Salvar" onPress={salvar} />


    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1
  }
})

export default App;