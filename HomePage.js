import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Navigator
} from 'react-native';

import Button from 'react-native-button';

var HomePage = React.createClass({
  onPress(){
    this.props.navigator.push({
      component: LoginPage
    })
  },
  render() {
    return (
      <View style={styles.container}>
       <Text style={{margin:100, color: 'black'}}>
        Unicorn Go
        </Text>
        <Button> 
          Home! Welcome! 
        </Button>
        <Text> Create an Account </Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}} />
        
      </View>
      );}
});

const styles = StyleSheet.create({
      container: {
      flex: 1,
      backgroundColor: 'mintcream',
      alignItems: 'center',
     } 
   });

export default HomePage