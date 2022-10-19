import React, { useState } from 'react';
import { ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';

const App = () => {

  const [gasolina, setGasolina] = useState('');
  const [alcool, setAlcool] = useState('');
  const [resultado, setResultado] = useState('');

  const calcula = () => {
    const tempGasolina = parseFloat(gasolina);
    const tempAlcool = parseFloat(alcool);

    if (tempGasolina * 0.7 > tempAlcool) {
      setResultado('Álcool');
    } else {
      setResultado('Gasolina')
    }
  }


  return (
    <ImageBackground
      style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
      source={{ uri: 'https://voxms.com.br/wp-content/uploads/2018/05/carro-abastecendo-1.jpg' }}>

      <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>Álcool ou Gasolina</Text>

      <Text style={{ fontSize: 16, color: "#fff", fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>Saiba qual a melhor opção de abastecimento para o seu veículo</Text>

      <TextInput onChangeText={(value) => setGasolina(value)} keyboardType="numeric" placeholder="Digite o valor da gasolina" style={{ backgroundColor: '#fff', width: '90%', marginVertical: 10 }} />
      <TextInput onChangeText={(value) => setAlcool(value)} keyboardType="numeric" placeholder="Digite o valor do Álcool" style={{ backgroundColor: '#fff', width: '90%', marginVertical: 10 }} />

      <TouchableOpacity onPress={calcula} >
        <Text
          style={{
            fontSize: 16,
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20

          }}>Calcular</Text>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 16,
          color: '#fff',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20

        }}>É melhor você abastecer com:</Text>

      <Text style={{ color: '#fff', fontSize: 30, fontWeight: "bold" }}>{resultado}</Text>
    </ImageBackground>
  )
}


export default App;