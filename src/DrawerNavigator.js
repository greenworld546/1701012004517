import React, { Component } from 'react'
import {
    View,
    Text,
    Stylesheet
}
from 'react-native';

import HomeScreen from '../src/HomeScreen/HomeScreen';
import {DrawerNavigator} from 'react-navigation';

const AppDrawerNavigator = new DrawerNavigator({
    HomeScreen: {
        screen: HomeScreen
    }
})

export default AppDrawerNavigator;