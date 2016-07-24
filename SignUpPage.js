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
import HomePage from './HomePage'; 

var SignUpPage = React.createClass({
  onPress(type){
    if(type== 'HomePage')
    {this.props.navigator.push({
      component: HomePage
    });
   }
    else{
     this.props.navigator.push({
      component: InitialPage
     });
    }  
  },
  render() {
    return (

      <View style={styles.Welcome}>
        <Text style={{margin:50, color: 'black'}}>
         Create an Account
        </Text>
        
        <View style={styles.Profile}>
          <Text> Enter your information below </Text>
          <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} />
        </View>
         
        <Button style={{margin:50, backgroundColor: 'black'}} onPress={() => this.onPress('HomePage')}> 
          Finish!
        </Button>
        <Button style={{margin:50, backgroundColor: 'black'}} onPress={() => this.onPress('LoginPage')}> 
          Back
        </Button>
      </View>
    );}
});

//Style of the Welcome
const styles = StyleSheet.create({
  Welcome: {
  flex: 1,
  backgroundColor: 'mintcream',
  alignItems: 'center',

},
  Profile: {
    flex:1,
    alignItems: 'center',
    padding:10,
    height:40,

  },

});

export default SignUpPage;