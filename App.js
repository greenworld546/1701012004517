import React, { Component, FlatList } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge, Left, Body, Right, Title, Accordion, ListItem, List, Switch } from 'native-base';
import { AppRegistry, AsyncStorage } from 'react-native';


import { YellowBox } from 'react-native'

export default class App extends Component {

  state = {
    url: "https://api-sandbox.tiket.com/apiv1/payexpress?method=getToken&output=json&secretkey=686cefadde5ffe8c45165ad590c861c9",
    token: "92587cb5eee423f33ec545d124c7eeb5a918ad59",
    result: "demo-example",
    countryList: [],
    airportList: []
  }

  async getKey(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      this.setState({
        countryList: JSON.parse(value)
      });
    } catch (error) {
      console.log("Error retrieving data" + error);
    }
  }

  async saveKey(key,value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      console.log("Data Savedxxx");
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  getToken = () => {

    fetch(this.state.url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          result: responseJson.token,
          token: responseJson.token
        });
      })
      .catch((error) => {
        console.error(error);
      });

  }

  readData = () => {
    console.log("Lets Try!");
    this.getKey("dataGue");
  }

  getListAirport = () => {

    fetch("https://api-sandbox.tiket.com/flight_api/all_airport?output=json&token=92587cb5eee423f33ec545d124c7eeb5a918ad59", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          airportList: responseJson.all_airport.airport
        });

      })
      .catch((error) => {
        console.error(error);
      });

  }

  getListCountry = () => {

    fetch("https://api-sandbox.tiket.com/general_api/listCountry?output=json&token=92587cb5eee423f33ec545d124c7eeb5a918ad59", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {

        this.saveKey("dataGue",responseJson.listCountry);
        console.log("Data Saved!");


      })
      .catch((error) => {
        console.error(error);
      });

  }

  render() {
    return (
      <AppStackNavigator/> 
    );
  }
}