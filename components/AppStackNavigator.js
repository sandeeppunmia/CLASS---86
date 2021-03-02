import React, {Component} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet, Alert,Image, Modal, KeyboardAvoidingView,ScrollView} from 'react-native';
import {createStackNavigator} from 'react-naviagtion-stack';
import BookDonateScreen from '../screens/BookDonateScreen';
import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen';

export const AppStackNavigator = createStackNavigator({
    BookDonateList:{
        screen:BookDonateScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    ReceiverDetails:{
        screen:ReceiverDetailsScreen,
        navigationOptions:{
            headerShown:false
        }
    }
 },
 {
     initialRouteName:'BookDonateList'
 }
)