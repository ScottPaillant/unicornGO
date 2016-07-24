import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Button from 'react-native-button';

var SignUpPage = React.createClass({
  render() {
    return (
      <View style={{flex:1,backgroundColor:'mintcream'}}>
        <Button> 
          Welcome! 
        </Button>
      </View>
    );}
});

export default SignUpPage;