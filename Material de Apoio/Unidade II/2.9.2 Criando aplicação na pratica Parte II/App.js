import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Switch } from 'react-native';

const App = () => {

  const [visible, setVisible] = useState(true);
  const [saldo, setSaldo] = useState(0);
  const [valorUsuario, setValorUsuario] = useState('');

  const add = () => {
    if (valorUsuario) {
      const temp = parseFloat(valorUsuario);
      setSaldo(saldo + temp);
      setValorUsuario('');
    } else {
      alert("Digite um valor")
    }
  }


  const remove = () => {
    if (valorUsuario) {
      const temp = parseFloat(valorUsuario);
      setSaldo(saldo - temp);
      setValorUsuario('');
    } else {
      alert("Digite um valor")
    }
  }


  return (
    <View style={{ padding: 10 }} >
      <Text style={{ marginBottom: 20 }}>Carteira Digital</Text>

      <View style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10 }}>


        <View style={styles.view1}>
          <Text>Seu Saldo</Text>
          <Switch value={visible} onValueChange={() => setVisible(!visible)} />
        </View>


        {
          visible ?
            <Text style={styles.saldo}>R$ {saldo}</Text> :
            <Text style={styles.saldo}>R$--</Text>
        }



        <TextInput
          onChangeText={(value) => setValorUsuario(value)}
          style={{ backgroundColor: '#fff', marginVertical: 10 }} />

        <View style={styles.view2}>
          <TouchableOpacity
            onPress={add}
            style={styles.button}>
            <Text style={{ color: '#fff', fontWeight: "bold", fontSize: 16 }}>Adicionar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={remove}
            style={styles.button}>
            <Text style={{ color: '#fff', fontWeight: "bold", fontSize: 16 }}>Remover</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  saldo: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10
  },
  view2: {
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  button: {
    height: 40,
    justifyContent: "center",
    marginVertical: 10
  }
})

export default App;