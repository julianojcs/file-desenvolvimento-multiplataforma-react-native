import React from 'react';
import { View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: 'yellow',
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-around",
        alignItems: 'center'
      }}
    >
      <View style={styles.viewVerde} />
      <View style={styles.viewAzul} />
      <View style={styles.viewVermelha} />
    </View>
  );
}


const styles = StyleSheet.create({
  viewVerde: {
    width: 50,
    height: 50,
    backgroundColor: 'blue'
  },
  viewAzul: {
    width: 50,
    height: 50,
    backgroundColor: 'blue'
  },
  viewVermelha: {
    width: 50,
    height: 50,
    backgroundColor: 'blue'
  },
})



export default App;