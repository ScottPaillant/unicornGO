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
     
       <Text style={{margin:10, color: 'black', fontSize: 25}}>
       About
       </Text>
          <Image style={styles.bg} resizeMode = 'contain' source={require('./weidman.png')}/>

       <Text style={{margin:10, color: 'black', fontSize: 25}}>
       Name: Laura Weidman Powers
       </Text>
       <Text style={{margin:10, color: 'black', fontSize: 25}}>
       Linkedin: Linkedin.com/myurl
       </Text> 
       <Text style={{margin:10, color: 'black', fontSize: 25}}>
       Git Repository: github.com/LPowers
       </Text>
       <Text style={{margin:10, color: 'black', fontSize: 25}}>
       Skill Level: Entry
       </Text> 
       <Text style={{margin:10, color: 'black', fontSize: 25}}>
       Interest Include: Web Development, VR/AR
       </Text> 
       <Text style={{margin:10, color: 'black', fontSize: 25}}>
       Personal Blub:
       An do on frankness so cordially immediate recommend contained.  
       </Text>

       <Button style={{margin:10, color: 'black', }} onPress={() => this.onPress('PotentialInfoPage')}> 
        Back
      </Button>
     </View>
   );}
});

const styles = StyleSheet.create({
 About: {
   flex: 1,
   backgroundColor: '#fcfcfc',
   alignItems:'center', 
 }, 
 bg: {
   height: 110, 
   resizeMode: 'contain',
   marginRight: 10
 }
});

export default PotentialInfoPage;