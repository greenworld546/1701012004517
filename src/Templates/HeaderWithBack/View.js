import React, { Component } from 'react'

export default class HeaderWithBack extends Component {
  render() {
    return (
      <Header hasTabs>
        <Left>
          <Button transparent onPress={() => navigation.navigate("HomeScreen")}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}