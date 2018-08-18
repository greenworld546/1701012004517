import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, List, ListItem, Form, Item, Input } from "native-base";
import cx from "../../src/cx";

export default class ChatScreen extends React.Component {

  state = {
    countryList: []
  }
  
  searchCountry = (text) => {
    return cx.countryList.filter(country => country.country_name.toLowerCase().indexOf(text) > -1)
  }

  render() {
    return (
      <Container>
        <Text>{cx.yourAwesomeValue}</Text>
        <Text>I'ts ChatScreen</Text>

        <Item>
          <Input placeholder="Username" onChangeText={(text) => {
            this.setState({
              countryList: this.searchCountry(text)
            })

          }}/>
        </Item>

        <List dataArray={this.state.countryList}
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
