import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

const App = () => {

  const [textUsuario, setTextUsuario] = useState('');

  return (
    <View>
      <Text style={{ color: '#ccc' }}>Hello World</Text>
      <Button title="Pressione" onPress={() => alert('ok')} />

      <TouchableOpacity
        onPress={() => alert('touchable')}
        style={{ backgroundColor: 'green', height: 45 }}
      >
        <Text style={{ color: '#fff' }}>Aperte</Text>
      </TouchableOpacity>

      <Image
        source={{
          uri:
            'https://image.freepik.com/fotos-gratis/vista-superior-de-um-presente-de-natal-embrulhado-com-um-cartao-que-diz-feliz-natal-em-uma-superficie-de-madeira_181624-25168.jpg'
        }}
        style={{ width: 150, height: 150 }}
      />

      <TextInput onChangeText={(val) => setTextUsuario(val)} />

    </View>
  )
}

export default App;