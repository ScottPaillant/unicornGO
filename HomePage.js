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
       <Text style={{margin:50, color: 'black', marginTop:200 , fontSize: 40}}>
        Home
        </Text>
        <Button> 
          Messages 
        </Button>
         <Button> 
          Resources
        </Button>
        <Text> Create an Account </Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}} />
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