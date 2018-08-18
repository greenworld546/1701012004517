import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem,List,ListItem } from "native-base";
import cx from "../../src/cx";

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <Container>
        <Text>{cx.yourAwesomeValue}</Text>
        <Text>I'ts ProfileScreen</Text>

        <List dataArray={cx.countryList}
          renderRow={(country) =>
            <ListItem>
              <Text>{country.country_id}</Text>
              <Text note>{country.country_name}</Text>
              <Text note>{country.country_areacode}</Text>
            </ListItem>
          }>
        </List>

      </Container>
    );
  }
}
