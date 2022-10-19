import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const Cat = () => {

  const [valor, setValor] = useState(0);

  const maisUm = () => {
    setValor(valor + 1);
  }

  const idade = 10;

  useEffect(() => {
    alert('Valor foi alterado');
  });


  return (
    <View>
      <Text style={{ fontSize: 50 }}>{valor}</Text>
      <Button title="Pressione" onPress={maisUm} />
    </View>
  )

}

export default Cat;