import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View >
      <Text style={styles.text}>Wesley</Text>
      <Text style={styles.text2}>Wesley</Text>
      <TouchableOpacity style={styles.botao} >
        <Text style={styles.text2}>Botão</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "red"
  },
  text2: {
    fontSize: 30,
    color: "blue"
  },
  botao: {
    backgroundColor: 'violet'
  }
})

export default App;