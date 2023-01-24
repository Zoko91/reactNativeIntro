import React, { useState, Component } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Button,
  TextInput,
  Alert,
} from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const people = [
  { id: 0, firstName: "Benoit", lastName: "Le Blanc" },
  { id: 1, firstName: "Bernard", lastName: "Claverie" },
  { id: 2, firstName: "Jean-Marc", lastName: "André" },
  { id: 3, firstName: "Jérôme", lastName: "Saracco" },
  { id: 4, firstName: "Catherine", lastName: "Semal" },
  { id: 5, firstName: "Jean-Marc", lastName: "Salotti" },
  { id: 6, firstName: "Pierre-Alexandre", lastName: "Favier" },
  { id: 7, firstName: "Véronique", lastName: "Lespinet-Najib" },
  { id: 8, firstName: "Noémie", lastName: "Chaniaud" },
  { id: 9, firstName: "Baptiste", lastName: "Pesquet" },
  { id: 10, firstName: "Coralie", lastName: "Eyraud-Dubois" },
  { id: 11, firstName: "Tracy", lastName: "Carmona" },
  { id: 12, firstName: "Sophie", lastName: "Solomas" },
  { id: 13, firstName: "Christophe", lastName: "Jauze" },
];

class MyComponent extends React.Component {
  state = {
    data: people,
  };
  renderItem = ({ item }) => (
    <Text style={styles.item}>
      {item.firstName} {item.lastName}
    </Text>
  );

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const InputTextTP = () => {
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateInput = () => {
    setIsValid(true);
  };

  return (
    <View>
      <TextInput
        style={{ fontSize: 20, textAlign: "center", paddingBottom: 10 }}
        placeholder="Saisissez votre prénom ici !"
        onChangeText={(text) => {
          setText(text);
          setIsValid(false);
        }}
        onSubmitEditing={() => validateInput()}
        defaultValue={text}
      />
      {isValid ? <Text>Bienvenue {text} !</Text> : null}
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      {/*<MyComponent />*/}
      <InputTextTP />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  item: {
    width: width,
    backgroundColor: "#ADD8E6",
    padding: 20,
    marginVertical: 4,
    fontSize: 20,
  },
  container1: {
    backgroundColor: "red",
    height: 150,
    width: 150,
    borderStyle: "solid",
    borderRadius: 10,
  },
  container2: {
    backgroundColor: "orange",
    height: 150,
    width: 150,
    borderStyle: "solid",
    borderRadius: 10,
  },
  container3: {
    backgroundColor: "green",
    height: 150,
    width: 150,
    borderStyle: "solid",
    borderRadius: 10,
  },
  image: {
    height: 150,
    width: 150,
  },
  buttonContainer: {
    margin: 20,
  },

  text: {
    fontSize: 20,
  },
});
