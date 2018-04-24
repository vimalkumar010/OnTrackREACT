import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import MapView from 'react-native-maps';

type Props = {};
export default class Maps extends Component<Props> {
  state ={
    //insert state variables here
  }
  render(){
    return(
      <View style = {styles.backgroundcontainer}>
        <Text style = {styles.mapText}>
          MAPS
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundcontainer: {
    flex: 1,
    backgroundColor: '#1e272e'
  },
  mapText:{
    fontSize:40,
    justifyContent:'center',
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
  }
});