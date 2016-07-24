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
import Homepage from './HomePage';
import ContactPotentialPage from './ContactPotentialPage';

var PotentialInfoPage= React.createClass({
onPress(type){
  if(type == 'ContactPotentialPage')
  {this.props.navigator.push({
    component: ContactPotentialPage
  });
}
  else{
   this.props.navigator.push({
    component: Homepage
   });
  }  
},

render() {
  return (
    <View style={styles.About}>
    
      <Text style={{margin:10, marginTop:200, color: 'black', fontSize: 25}}>
      About
      </Text>
         <Image style={styles.bg} resizeMode = 'contain' source={require('./profileicon_360.png')}/>

      <Button style={{marginTop:40, color: 'black', }} onPress={() => this.onPress('ContactPotentialPage')}> 
        Contact

      </Button>
      <Button style={{margin:10, color: 'black', }} onPress={() => this.onPress('PotentialInfoPage')}> 
        Back
      </Button>
    </View>
  );}
});

const styles = StyleSheet.create({
 About: {
   flex: 1,
   backgroundColor: '#fcfcfc ',
   alignItems:'center', 
 }, 
 bg: {
   height: 110, 
   resizeMode: 'contain',
   marginRight: 10
 }
});

export default PotentialInfoPage;