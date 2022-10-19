import React, { useState } from 'react';
import { View, Text, ScrollView, Switch, ActivityIndicator, Modal, Button } from 'react-native';

const App = () => {

  const [valueSwitch, setValueSwitch] = useState(true);
  const [visible, setVisible] = useState(false);

  const controlaSwitch = () => {
    setValueSwitch(!valueSwitch);
  }

  const controlaModal = () => {
    setVisible(true);
  }

  const controlaModal2 = () => {
    setVisible(false);
  }


  return (
    <ScrollView>

      <Text>
        Amet enim cupidatat ex velit duis Lorem ipsum aliquip consequat dolor culpa excepteur sit. Commodo duis laborum occaecat commodo Lorem. Sunt irure minim qui esse nisi consectetur sint irure ullamco. Amet amet consequat Lorem veniam cupidatat consectetur dolor pariatur eu ad pariatur.
        Commodo culpa qui officia eu elit Lorem. Sint commodo qui velit sint minim. Ex ad eu ut veniam ad non non eu ad.
        Quis eu est mollit laboris laboris eiusmod. Aute aliqua sint aliqua aliqua incididunt et. Do incididunt velit velit non anim ullamco pariatur fugiat incididunt consectetur dolore non. Veniam officia amet adipisicing reprehenderit laboris dolor magna excepteur. Occaecat anim voluptate consectetur laboris. Adipisicing elit fugiat enim deserunt incididunt non. Quis commodo fugiat id tempor duis aliquip irure consequat.
        Aute commodo et esse proident reprehenderit enim occaecat proident non in culpa duis sit. Do excepteur sit laborum nulla ipsum. Adipisicing excepteur reprehenderit magna incididunt occaecat deserunt mollit nisi nisi ad consectetur nostrud. Aliquip pariatur culpa anim amet consequat sit nisi quis dolor. Proident enim minim cillum id pariatur ad proident et consequat enim.
        Veniam consequat et culpa irure incididunt velit mollit esse. Sint sit exercitation pariatur enim cillum non reprehenderit esse id ipsum commodo pariatur. Exercitation velit ad est laborum est cupidatat aliquip elit adipisicing exercitation aliquip consectetur velit. Duis commodo aliqua exercitation et. Velit anim et est dolor laborum aliqua ex esse eu ut.
        Incididunt tempor id amet mollit consequat Lorem est esse cillum. Ex aliquip aliqua dolor nulla tempor. Amet officia consectetur culpa in sit amet aliqua cillum proident ullamco mollit occaecat nostrud. Fugiat sint proident tempor eu laborum nisi minim aliqua anim sint minim. Et ex aliqua est pariatur adipisicing.
        Amet enim cupidatat ex velit duis Lorem ipsum aliquip consequat dolor culpa excepteur sit. Commodo duis laborum occaecat commodo Lorem. Sunt irure minim qui esse nisi consectetur sint irure ullamco. Amet amet consequat Lorem veniam cupidatat consectetur dolor pariatur eu ad pariatur.
        Commodo culpa qui officia eu elit Lorem. Sint commodo qui velit sint minim. Ex ad eu ut veniam ad non non eu ad.
        Quis eest mollit laboris laboris eiusmod. Aute aliqua sint aliqua aliqua incididunt et. Do incididunt velit velit non anim ullamco pariatur fugiat incididunt consectetur dolore non. Veniam officia amet adipisicing reprehenderit laboris dolor magna excepteur. Occaecat anim voluptate consectetur laboris. Adipisicing elit fugiat enim deserunt incididunt non. Quis commodo fugiat id tempor duis aliquip irure consequat.
      </Text>

      <Switch value={valueSwitch} onValueChange={controlaSwitch} />


      {valueSwitch ? <Text>Hello World</Text> : <Text>Olá Mundo!</Text>}


      {valueSwitch ? <Text>Hello World</Text> : <ActivityIndicator size="large" />}


      <Button title="Abrir Modal" onPress={controlaModal} />

      <Modal visible={visible}>
        <View style={{ width: 200, height: 200, backgroundColor: "red" }}>
          <Text>Olá, eu sou um modal</Text>
          <Button title="ok" onPress={controlaModal2} />
        </View>
      </Modal>



    </ScrollView>
  );
}

export default App;