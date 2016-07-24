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
       

      <View style={styles.container}>
      
        <Text style={{margin:10, marginTop:200, color: 'black', fontSize: 40}}>
        Unicorn Go
        </Text>
           <Image style={styles.bg} resizeMode = 'contain' source={require('./sf.png')}/>

        <Button style={{marginTop:40, color: 'black', }} onPress={() => this.onPress('SignUpPage')}> 
          Sign Up

        </Button>
        <Button style={{margin:10, color: 'black', }} onPress={() => this.onPress('LoginPage')}> 
          Login
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
        
        height: 100,
        resizeMode: 'contain',
        marginRight: 10

       
    }
});

export default InitialPage;