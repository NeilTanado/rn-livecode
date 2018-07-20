import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { StackNavigator } from 'react-navigation'
import Home from './src/Home'
import store from './src/redux/store'
import Play from './src/Play'
import { Provider } from 'react-redux'

export default class App extends Component {
  render() {
    return (
     <Provider store={store}>
       <AppStackNavigator/>
     </Provider>
    );
  }
}

const AppStackNavigator = new StackNavigator({
  Home : {screen : Home},
  Play : {screen : Play}
})