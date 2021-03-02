import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MyDonationScreen from '../screens/MyDonationScreen';
import SettingScreen from '../screens/SettingScreen';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import NotificationScreen from '../screens/NotificationScreen';
import MyReceivedBooks from '../screens/MyRequestBookScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    MyDonations:{
        screen:MyDonationScreen 
    },
    Notifications:{
        screen:NotificationScreen
    },
    MyReceivedBooks:{
        screen:MyReceivedBooks
    },
    Setting:{
        screen:SettingScreen
    }
   },
   {
       contentComponent:CustomSideBarMenu 
   },
   {
       initialRouteName:'Home'
   }
)