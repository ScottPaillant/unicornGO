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
import LoginPage from './LoginPage';
import InitialPage from './InitialPage';

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
        renderScene={this.renderScene}
        initialRoute={{ component:InitialPage }} />
    )}
  });

AppRegistry.registerComponent('working', () => working);
