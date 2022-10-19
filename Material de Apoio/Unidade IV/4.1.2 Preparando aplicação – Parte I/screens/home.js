import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native'

import axios from 'axios';

const App = () => {

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const [users, setUsers] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    axios.get('http://10.0.2.2:3000/users')
      .then((req) => setUsers(req.data))
      .catch((erro) => console.log(erro));
  }, [route.params?.res])



  const saveUser = () => {
    axios.post('http://10.0.2.2:3000/users', {
      name: name,
      location: location
    }).then((data) => {
      //console.log("DATA:" + JSON.stringify(data.data));

      const temp = [...users, data.data];
      setUsers(temp);
      alert("Usuario salvo com sucesso!")

    }).catch((erro) => alert("Erro ao salvar: " + erro))
  }


  const deleteUser = (id) => {

    axios.delete('http://10.0.2.2:3000/users/' + id)
      .then(() => {

        const temp = users.filter((item) => {
          return item.id !== id;
        })

        setUsers(temp);

        alert("Deletado com sucesso!");
      })
      .catch((erro) => alert("Erro ao deletar: " + erro));

  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>CRUD USUÁRIOS</Text>
      <TextInput onChangeText={(txt) => setName(txt)} style={styles.input} placeholder="Nome do Usuário" />
      <TextInput onChangeText={(txt) => setLocation(txt)} style={styles.input} placeholder="Localidade" />
      <TouchableOpacity style={styles.button} onPress={saveUser}>
        <Text style={styles.txtButton}> Cadastrar</Text>
      </TouchableOpacity>

      <FlatList keyExtractor={(item, index) => item.id.toString()} data={users} renderItem={({ item }) => (
        <View style={{ flexDirection: 'row' }}>

          <TouchableOpacity onPress={() => navigation.navigate('Details', { user: item })}>
            <Text>{item.name}</Text>
          </TouchableOpacity>

          <Text onPress={() => deleteUser(item.id)} style={{ color: 'red', marginLeft: 10 }}>Apagar</Text>
        </View>
      )} />

    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    padding: 10
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: '#545454',
    marginVertical: 10,
    padding: 5,
    height: 45,
    fontSize: 16
  },
  button: {
    alignItems: 'center',
    justifyContent: "center"
  },
  txtButton: {
    fontSize: 16,
    fontWeight: '600'
  }
})

export default App;