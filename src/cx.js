import React, { Component } from "react";
import { AsyncStorage } from "react-native"

export default class cx extends React.Component {

  static yourAwesomeValue = "Daanz";
  static navigate = (t, screenName) => {
    t.props.navigation.navigate(screenName);
  }


  static countryList = [];

  static isNewData = () => {
    //untuk check apakah data yang terbaru atau tidak
    return true;
  }

  static loadData = () => {
    cx.getListCountry();
  }

  static getListCountry = () => {

    fetch("https://api-sandbox.tiket.com/general_api/listCountry?output=json&token=92587cb5eee423f33ec545d124c7eeb5a918ad59", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {

        cx.countryList = responseJson.listCountry


      })
      .catch((error) => {
        console.error(error);
      });

  }
}