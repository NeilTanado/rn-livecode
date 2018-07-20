import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';


export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>WELCOME TO TIC TAC TOE</Text>
        <Text style={styles.instructions}> Tap Start Game To Play</Text>
        <Button onPress={()=> this.props.navigation.navigate('Play')} title="PLAY!"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
