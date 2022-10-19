import React from 'react';
import { View, Text } from 'react-native';

const Component = ({ texto }) => {
  return (
    <View style={{ backgroundColor: "red" }}>
      <Text style={{ fontSize: 20 }}>Mensagem: {texto}</Text>
    </View>
  )
}

export default Component;