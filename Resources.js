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
  Image,
  Navigator
} from 'react-native';
import Button from 'react-native-button';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

var Resources = React.createClass({
  onPress(type){
    if(type== 'SignUpPage')
    {this.props.navigator.push({
      component: SignUpPage
    });
   }
    else{
     this.props.navigator.pop({
     });
    }  
  },
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.bg} resizeMode = 'contain' source={require('./map.png')}/>

        <Button onPress={() => this.onPress('goBack')}> 
          Back
        </Button>
      </View>
    );}
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
  },
  bg: {
        height:710,
        width:300,
        marginRight: 10
  
    }
});

export default Resources;