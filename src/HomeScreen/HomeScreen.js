import React, { Component } from "react";
import {
  View,
  Button
} from "react-native";

import { Container, Text, DatePicker, Item, Input, Icon, List, ListItem } from 'native-base';

import cx from "../../src/cx";
import SearchCountry from "../../src/components/SearchCountry/SearchCountry";

export default class HomeScreen extends React.Component {

  state = {
    destinationCode: "",
    arrivalCode: ""
  }

  componentDidMount() {
    cx.registerInstance(this);
  }

  render() {
    return (
      <View>
        <Text>Your Destination Result is : {this.state.destinationCode} to {this.state.arrivalCode}</Text>
        <SearchCountry id="destination" stateName="destinationCode" label="Destination" searchResultCountryCode={this.state.destinationCode} />
        <SearchCountry id="arrival" stateName="arrivalCode" label="Arrival" searchResultCountryCode={this.state.arrivalCode} />



        <Text>DepartDate:</Text>
        <DatePicker
          defaultDate={new Date(2018, 4, 4)}
          minimumDate={new Date(2018, 1, 1)}
          maximumDate={new Date(2018, 12, 31)}
          locale={"en"}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={"fade"}
          androidMode={"default"}
          placeHolderText="Select date"
          textStyle={{ color: "green" }}
          placeHolderTextStyle={{ color: "#d3d3d3" }}
          onDateChange={() => {

          }}
        />

        <Text>ReturnDate:</Text>
        <DatePicker
          defaultDate={new Date(2018, 4, 4)}
          minimumDate={new Date(2018, 1, 1)}
          maximumDate={new Date(2018, 12, 31)}
          locale={"en"}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={"fade"}
          androidMode={"default"}
          placeHolderText="Select date"
          textStyle={{ color: "green" }}
          placeHolderTextStyle={{ color: "#d3d3d3" }}
          onDateChange={() => {

          }}
        />

        <Text>Penumpang (Dewasa):</Text>
        <Item>
          <Input placeholder='' value="1" />
          <Icon active name='swap' onPress={() => {
            alert("AW");
          }} />
        </Item>

        <Text>Penumpang (Anak):</Text>
        <Item>
          <Input placeholder='' value="1" />
          <Icon active name='swap' onPress={() => {
            alert("AW");
          }} />
        </Item>

        <Text>Penumpang (Bayi):</Text>
        <Item>
          <Input placeholder='' value="1" />
          <Icon active name='swap' onPress={() => {
            alert("AW");
          }} />
        </Item>

        <List>
          <ListItem itemHeader first>
            <Text>Class</Text>
          </ListItem>
          <ListItem >
            <Text>Economoy</Text>
          </ListItem>
          <ListItem last>
            <Text>Business</Text>
          </ListItem>
          <ListItem itemHeader>
            <Text>FirstClass</Text>
          </ListItem>
          <ListItem>
            <Text>Premium Economy</Text>
          </ListItem>
        </List>


      </View>
    );
  }
}
