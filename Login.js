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

var initialPage = React.createClass({
  onPress(){
    this.props.navigator.push({
      component: LoginPage
    })
  },
  render() {
    return (
       
      <View style={styles.container}>
        <Text> Unicorn Go </Text>
        <Button style={{margin:50, backgroundColor: 'black'}} onPress={this.onPress}> 
          Sign Up
        </Button>
        <Button style={{margin:50, backgroundColor: 'black'}} onPress={this.onPress}> 
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