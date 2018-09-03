import React, { Component } from 'react';
import { AppRegistry, View, PermissionsAndroid } from 'react-native';

import {
    Container, Button, Label, Header, Left, Body, Title, Right, Content, Form, Text, DatePicker,
    Item, Input, Icon, List, ListItem, Footer, FooterTab, Badge, Tabs, Tab, TabHeading, IconNB
} from 'native-base';

import { StackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native'

import SearchCountry from './src/Components/SearchCountry/SearchCountry';
import MenuItem from './src/Components/MenuItem/MenuItem';
import FooterTabItem from './src/Components/FooterTabItem/FooterTabItem';
import ExButton from './src/Components/Forms/ExButton/ExButton';
import ExInput from './src/Components/Forms/ExInput/ExInput';
import ExDatePicker from './src/Components/Forms/ExDatePicker/ExDatePicker';
import ExSearchCity from './src/Components/Forms/ExSearchCity/ExSearchCity';
import ExSearchPassenger from './src/Components/Forms/ExSearchPassenger/ExSearchPassenger';
import ExSearchClass from './src/Components/Forms/ExSearchClass/ExSearchClass';

import EventAdministration from './src/ExtremeCoder/EventAdministration/EventAdministration';
import StateManager from './src/ExtremeCoder/StateManager/StateManager';

//Screen Import
import HomeScreen from './src/Screens/HomeScreen/View';
import HomeScreenLogic from './src/Screens/HomeScreen/Logic';

import MainMenuScreen from './src/Screens/MainMenuScreen/View';
import MainMenuScreenLogic from './src/Screens/MainMenuScreen/Logic';

import FooterTabScreen from './src/Screens/FooterTabScreen/View';
import FooterTabScreenLogic from './src/Screens/FooterTabScreen/Logic';

import FlightScreen from './src/Screens/FlightScreen/View';
import FlightScreenLogic from './src/Screens/FlightScreen/Logic';

import HotelScreen from './src/Screens/HotelScreen/View';
import HotelScreenLogic from './src/Screens/HotelScreen/Logic';

import FlightAndHotelScreen from './src/Screens/FlightAndHotelScreen/View';
import FlightAndHotelScreenLogic from './src/Screens/FlightAndHotelScreen/Logic';

import EatScreen from './src/Screens/EatScreen/View';
import EatScreenLogic from './src/Screens/EatScreen/Logic';

//Template Import
import HeaderWithBack from './src/Templates/HeaderWithBack/View';
import HeaderWithBackLogic from './src/Templates/HeaderWithBack/Logic';


import styles from './src/Styles/Global/Global';



//ExtremeCoder Component
global.EventAdministration = EventAdministration;
global.EA = EventAdministration;
global.SM = StateManager;

global.Container = Container;
global.Button = Button;
global.Header = Header;
global.Left = Left;
global.Body = Body;
global.Title = Title;
global.Label = Label;
global.Right = Right;
global.Content = Content;
global.Form = Form;
global.Text = Text;
global.DatePicker = DatePicker;
global.Item = Item;
global.Input = Input;
global.Icon = Icon;
global.List = List;
global.ListItem = ListItem;
global.Footer = Footer;
global.FooterTab = FooterTab;
global.Badge = Badge;
global.Tabs = Tabs;
global.Tab = Tab;
global.TabHeading = TabHeading;
global.IconNB = IconNB;

global.View = View;

global.FooterTabScreen = FooterTabScreen;



/*
Ketika membuat View dan Logic,
Selalu panggil fungsi registerEvent();
*/

//Screen View,Logic & Event Register
global.HomeScreen = HomeScreen;
global.HomeScreenLogic = HomeScreenLogic;
HomeScreenLogic.registerEvent();

global.MainMenuScreen = MainMenuScreen;
global.MainMenuScreenLogic = MainMenuScreenLogic;
MainMenuScreenLogic.registerEvent();

global.FooterTabScreen = FooterTabScreen;
global.FooterTabScreenLogic = FooterTabScreenLogic;
FooterTabScreenLogic.registerEvent();

global.FlightScreen = FlightScreen;
global.FlightScreenLogic = FlightScreenLogic;
FlightScreenLogic.registerEvent();

global.HotelScreen = HotelScreen;
global.HotelScreenLogic = HotelScreenLogic;
HotelScreenLogic.registerEvent();

global.FlightAndHotelScreen = FlightAndHotelScreen;
global.FlightAndHotelScreenLogic = FlightAndHotelScreenLogic;
FlightAndHotelScreenLogic.registerEvent();

global.EatScreen = EatScreen;
global.EatScreenLogic = EatScreenLogic;
EatScreenLogic.registerEvent();

//Template
global.HeaderWithBack = HeaderWithBack;
global.HeaderWithBackLogic = HeaderWithBackLogic;
HeaderWithBackLogic.registerEvent();

global.styles = styles;

global.SearchCountry = SearchCountry;
global.MenuItem = MenuItem;
global.FooterTabItem = FooterTabItem;
global.ExButton = ExButton;
global.ExInput = ExInput;
global.ExDatePicker = ExDatePicker;
global.ExSearchCity = ExSearchCity;
global.ExSearchPassenger = ExSearchPassenger;
global.ExSearchClass = ExSearchClass;

global.AppStackNavigator = new StackNavigator({
    EatScreen: {
        screen: EatScreen
    },
    HomeScreen: {
        screen: HomeScreen
    },
    FlightScreen: {
        screen: FlightScreen
    }, HotelScreen: {
        screen: HotelScreen
    }, FlightAndHotelScreen: {
        screen: FlightAndHotelScreen
    }, EatScreen: {
        screen: EatScreen
    }
}, {
        navigationOptions: {
            header: null
        }
    })

export default class AppZ extends Component {
    constructor() {
        super()
        YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
    }
    render() {
        return (
            <AppStackNavigator />
        );
    }
}

AppRegistry.registerComponent('reactnativekata', () => AppZ);
