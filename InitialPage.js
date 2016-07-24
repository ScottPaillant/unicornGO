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

var InitialPage = React.createClass({
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
       
      <View style = {styles.container}>
        <Text style= {{margin:100, color: 'black'}}>
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
  },
});

export default InitialPage;