import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const App = () => {

  const dados = [
    { id: '1', title: 'First Item', age: 15 },
    { id: '2', title: 'Second Item', age: 16 },
    { id: '3', title: 'Third Item', age: 21 },
    { id: '4', title: 'Fourth Item', age: 35 },
    { id: '5', title: 'Fifth Item', age: 44 },
    { id: '6', title: 'Sixth Item', age: 75 },
  ]

  return (
    <View>
      <FlatList
        data={dados}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#cacaca",
              marginBottom: 5,
              justifyContent: "center",
              paddingLeft: 10
            }}
          >
            <Text style={{ color: 'blue' }}>{item.age}</Text>
            <Text style={{ color: 'red' }}>{item.title}</Text>
          </View>
        )}

      />
    </View>
  );
}

export default App;