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
     this.props.navigator.pop({
     });
    }  
  },
  render() {
    return (

      <View style={styles.Welcome}>
        <Text style={{margin:50, color: 'black', marginTop:200 , fontSize: 30}}>
         Create an Account
        </Text>
        
        <View style={styles.Profile}>

          <Text> Enter your information below </Text>
          <TextInput style={{height: 40,  borderColor: 'gray', borderWidth: 1}} />

           <TextInput style={{height: 40,  borderColor: 'gray', borderWidth: 1}} />
        </View>



         <View style={{flexDirection:'row'}}>
          <Button style={{padding:25, margin:50, marginTop:20,  flex:1}} onPress={() => this.onPress('LoginPage')}> 
            Back!
          </Button>

          <Button style={{padding:25, margin:50, marginTop:20, flex:1}} onPress={() => this.onPress('HomePage')}> 
           Done
          </Button>
        </View>
      </View>
    );}
});

//Style of the Welcome
const styles = StyleSheet.create({
  Welcome: {
  flex: 1,
  backgroundColor: '#fcfcfc',
  alignItems: 'center',

},
  Profile: {
    flex:1,
    alignItems: 'center',
    padding:10,
   

  },

});

export default SignUpPage;