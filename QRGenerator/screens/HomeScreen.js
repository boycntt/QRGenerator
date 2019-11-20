import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { TextInput } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      text: ' ',
    };

  }

  getDataURL() {
    this.svg.toDataURL((dataURL)=>{
      console.log(dataURL);
    });
  }

  componentDidMount() {
    this.inputs.focus();
  }

  render() {
    let logoFromFile = require('../assets/images/Facebook_Logo.png');
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          ref={(input) => { this.inputs = input; }}
          onChangeText={(text) => {
            this.setState({ text: text === "" ? " " : text })
          }}
          value={this.state.text}
        />
        <QRCode
          value={this.state.text}
          size={350}
          logo={logoFromFile}
          logoSize={30}
          getRef={(c) => (this.svg = c)}
        />
        <Button title={"Save"}
        onPress={() => {
          this.getDataURL();
        }}
        />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 5,
  }
});
