import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const FlatComponent = ({ data }) => {

  const navigation = useNavigation();


  const navegar = () => {
    navigation.navigate('Tela2', { data: data });
  }

  return (
    <TouchableOpacity onPress={navegar} style={styles.container}>
      <Image source={{ uri: data.image }} resizeMode="contain" style={{ width: 100, height: 100 }} />

      <View style={styles.subcontainer}>
        <Text style={styles.title}>{data.filme}</Text>
        <Text>{data.ano}</Text>
        <Text>{data.estilo}</Text>
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cacaca',
    marginBottom: 5,
    flexDirection: 'row',
  },
  subcontainer: {
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default FlatComponent;