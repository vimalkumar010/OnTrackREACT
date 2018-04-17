import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  ToastAndroid
} from 'react-native';

export default class loginForm extends Component {

  //constructor method, to properly declare all needed variables
  constructor(props) {
    super(props);                                         // grab props from app component, if needed
    this._checkDetails = this._checkDetails.bind(this);   // bind method 'this' to component 'this', to reference 'this.state' properly
    this.state = {                                        // declare component state (note use of 'this' keyword)
      username: '',
      password: ''
    };
  }

  _checkDetails() {
    if (String(this.state.username) === 'user' && String(this.state.password) === '123') {          //reference state variable (note use of 'this.state.password', as opposed to 'this.state')
      ToastAndroid.show('Success!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Failed!', ToastAndroid.SHORT);
    }
  }

  //////////////////////////////////////////////////////////////
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username or Email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid="transparent"
          onChangeText={(username) => this.setState({ username })}
          style={styles.input} />
        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid="transparent"
          onChangeText={(password) => this.setState({ password })}
          style={styles.input} />
        <Button onPress={this._checkDetails} title='login' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  }
});
