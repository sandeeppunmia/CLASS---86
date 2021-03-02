import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import ReceiverDetailsScreen from './screens/ReceiverDetailsScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {AppTabNavigator} from './components/AppTabNavigator';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{
    screen:WelcomeScreen
  },
  ReceiverDetails:{
    screen:ReceiverDetailsScreen
  },
  Drawer:{
    screen:AppDrawerNavigator
  }
})

const AppContainer=createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
