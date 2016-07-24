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
  Navigator,
} from 'react-native';
import Button from 'react-native-button';

var working = React.createClass({

  _handlePress(){
    this.navigator.push({
    name: 'Login', // Matches route.name
    })
  },
  renderScene(route, navigator) {
    return <route.component navigator={navigator} {...route.passProps} />
   },
   render(){
    console.log('rendering first page');
    return (
      <Navigator
        style={ styles.container }
        renderScene={this.renderScene}
        initialRoute={{ component:LoginPage }} />
    )}
  });

var LoginPage = React.createClass({
  onPress(){
    this.props.navigator.push({
      component: pageTwo
    })
  },
  render() {
    console.log('rendering page');
    return (
      <View style={styles.container}>
        <Button onPress={this.onPress}> 
          The 
        </Button>
      </View>
    );}
});

var pageTwo = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1,backgroundColor:'blue'}}>
          <Button> 
            The 
          </Button>
        </View>
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

AppRegistry.registerComponent('working', () => working);
