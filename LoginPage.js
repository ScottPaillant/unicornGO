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
import sturecPage from './sturecPage';


var LoginPage = React.createClass({
  onPress(){
    this.props.navigator.push({
      component: sturecPage
      })
  },

  render() {
    return (
      <View style={{flex:1,backgroundColor:'mintcream'}}>
        <Button> 
          The 
        </Button>
      </View>
    );}
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  
});

export default LoginPage;