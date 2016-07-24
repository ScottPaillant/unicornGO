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
import Resources from './Resources';
import ListPotentialTalent from './ListPotentialTalent';

var HomePage = React.createClass({
  onPress(type){
    if(type== 'ListPotentialTalent')
    {this.props.navigator.push({
      component: ListPotentialTalent
    }); 
    }
    else if(type=='resources'){
     this.props.navigator.push({
    component: Resources
     });
    } 
    else
    {
      this.props.navigator.pop({
     });
    } 
  },
  render() {
    return (
      <View style={styles.container}>
       <Text style={{margin:50, color: 'black', marginTop:200 , fontSize: 40}}>
        Home
        </Text>
        <Button onPress={() => this.onPress('ListPotentialTalent')}> 
          List Potential 
        </Button>
         <Button onPress={() => this.onPress('resources')}> 
          Resources
        </Button>
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
     } 
   });

export default HomePage