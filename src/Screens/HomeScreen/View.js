import React, { Component } from "react";
import StateManager from "../../ExtremeCoder/StateManager/StateManager";

export default class HomeScreen extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        SM.registerInstance(this);
        global.navigation = this.props.navigation;
    }

    render() {
        return (
            <Container>
                <Header hasTabs>
                    <Left>
                        <Button transparent>
                            <Icon name="home" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>AnagataTravel</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <MainMenuScreen />
                </Content>
                <FooterTabScreen />
            </Container >
        )
    }
}
