/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Button from 'react-native-button';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
var initialPage = React.createClass({
  onPress(type){
    if(type== 'SignUpPage')
    {this.props.navigator.push({
      component: SignUpPage
    });
}
    else{
     this.props.navigator.push({
    component: LoginPage
     });
    }  
  },
  render() {
    return (
       
      <View style={styles.container}>
        <Text style={{margin:100, color: 'black'}}>
        Unicorn Go
        </Text>
        <Button style={{margin:50, backgroundColor: 'black'}} onPress={() => this.onPress('SignUpPage')}> 
          Sign Up
        </Button>
        <Button style={{margin:50, backgroundColor: 'black'}} onPress={() => this.onPress('LoginPage')}> 
          Login
        </Button>
      </View>
    );}
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mintcream',
    alignItems: 'center',
    fontFamily: 'Verdana'

  },
  welcome: {
    fontSize: 70,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#a9a9a9',
    marginBottom: 5,
  },
});

export default initialPage;