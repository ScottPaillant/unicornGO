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
  TextInput,
  View,
  Navigator,
  ListView,
  StatusBar,
  Image
} from 'react-native';
import Button from 'react-native-button';

var ListPotentialTalent = React.createClass({
  onPress(){
    this.props.navigator.pop({
    });
  },
  watchID: (null: ?number),
  getInitialState(){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return {
        // dataSource: ds.cloneWithRows(['Person 1', 'Person 2', 'Person 3', 'Person 4']),
        initialLatitude: 'unknown',
        initialLongitude: 'unknown',
        currentLatitude: 'unknown',
        currentLongitude: 'unknown',
        text: 'Person 1'
      };
  },
  findNearby(){
    var longitude = -122.406417 // Github Geo Location
    var latitude = 37.785834

    if(this.state.currentLongitude == '-122.406417'){
      // close by longitutde
        if(this.state.currentLatitude == '37.785834'){
          // close by longitude
          // display user 

        }
    }
    else{

    }
  },
  render() {
    return (
      <View>
          <Image style={{height: 100,width:100, marginTop:20}} source={require('./obama.png')}/>
          <TextInput
            style={{margin:25, height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={'Android Developer'}
          />
          <Image style={styles.ic} source={require('./jwill.png')}/>
          <TextInput
            style={{margin:25, height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={'iOS Developer'}
          />
          <Image style={styles.ic} source={require('./weidman.png')}/>
          <TextInput
            style={{margin:25, height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={'Web Developer'}
          />

          <Button onPress={() => this.onPress('goBack')}> 
             Back
          </Button>
      </View>
    );},

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialLatitude = position.coords.latitude;
        var initialLongitude = position.coords.longitude;
        this.setState({initialLatitude});
        this.setState({initialLongitude});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
        var currentLatitude = position.coords.latitude;
        var currentLongitude = position.coords.longitude;
        this.setState({currentLatitude});
        this.setState({currentLongitude});
        this.findNearby();
    });
  },

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  ic: {     
      height: 100,
      width:100
    }
});

export default ListPotentialTalent;