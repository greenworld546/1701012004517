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

  /*
     Dynamic Getter and Setter,
     Tujuannya untuk mengubah nilai state variable antar komponen secara spesifik,
     dengan mengikut sertakan nama class-nya.

     Kelebihan:
     Lebih mudah untuk mengubah state antar komponen tanpa perlu State Manager maupun ContextAPI

     Kekurangan:
     Harus meregister Instance di fungsi componentDidMount()
  */
  static instanceList = [];
  static registerInstance(instance, loadStateStorage = false) {
    instanceName = instance.constructor.name;
    cx.instanceList[instanceName] = instance;

    if (loadStateStorage) {

      for (stateName of Object.keys(cx.instanceList[instanceName].state)) {
        cx.getStorage(`${instanceName}.${stateName}`);
      }

    }

  }

  static getState(instanceName, stateName) {
    if (!cx.instanceList[instanceName]) {
      alert(`Gotcha! ${instanceName} is not registered!`);
      return;
    }
    return cx.instanceList[instanceName].state[stateName];
  }

  static setState(instanceName, stateName, value, isSavedToStorage = false) {
    if (!cx.instanceList[instanceName]) {
      alert(`Gotcha! ${instanceName} is not registered!`);
      return;
    }

    cx.instanceList[instanceName].setState({
      [stateName]: value
    });

    if (isSavedToStorage) {
      cx.setStorage(instanceName + "." + stateName, value);
    }
  }

  /*
    Dynamic Getter and Setter StateStorageSync

    Memiliki fungsi yang sama dengan DynamicGetter and Setter,
    Hanya saja, nilai state akan disimpan ke storage ketika ada perubahan.
    Serta, nila state akan di load ketika pertama x diminta.

    ***EXPERIMENTAL MODE**** 
    PERFORMA belum ditest

  */

  static async getStorage(stateNameAsStorageName) {
    try {
      const value = await AsyncStorage.getItem(stateNameAsStorageName);

      if (value == null) {
        console.log("You try to getStorage for : " + stateNameAsStorageName + " but the value is null");
      }
      else {
        console.log("You try to getStorage for : " + stateNameAsStorageName + " and the value is > " + value);
      
        instanceName = stateNameAsStorageName.split(".")[0];
        stateName = stateNameAsStorageName.split(".")[1];

        cx.setState(instanceName,stateName,value)
        
      }

      

    } catch (error) {
      alert("Error retrieving data" + error);
    }
  }

  static async setStorage(stateNameAsStorageName, value) {
    try {
      await AsyncStorage.setItem(stateNameAsStorageName, JSON.stringify(value));
      console.log("Data Savedxxx");
    } catch (error) {
      alert("Error saving data" + error);
    }
  }


}