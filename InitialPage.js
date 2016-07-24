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
    console.log('rendering page');
    return (
      <View style={styles.container}>
        <Button style={{margin:10}} onPress={this.onPress}> 
          The 
        </Button>
      </View>
    );}
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default initialPage;