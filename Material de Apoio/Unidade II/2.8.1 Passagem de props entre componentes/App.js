import React from 'react';
import { ScrollView } from 'react-native';

import TextFormatado from './TextFormatado';

const App = () => {
  return (
    <ScrollView>
      <TextFormatado texto="Feliz ano novo" />
      <TextFormatado texto="Olá" />
      <TextFormatado texto="Feliz Natal" />
      <TextFormatado />
      <TextFormatado />
      <TextFormatado />
      <TextFormatado />
      <TextFormatado />
      <TextFormatado />
    </ScrollView>
  );
}

export default App;