import React from 'react';
import { View, Text, Button } from 'react-native';

class App extends React.Component {
  state = {
    numero: 1,
  };

  maisUm = () => {
    this.setState({ numero: this.state.numero + 1 })
  }

  render() {
    return (
      <View>
        <Text>{this.state.numero}</Text>
        <Button title="Somar" onPress={this.maisUm} />
      </View>
    )
  }
}

export default App;