import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, List, ListItem, Form, Item, Input } from "native-base";
import cx from "../../../src/cx";

export default class SearchCountry extends React.Component {

    constructor() {
        super();
        cx.loadData();
    }

    state = {
        selectedCountry: "",
        countryList: []
    }

    onPressEventEnabled = true;

    componentDidMount(){
        cx.registerInstance(this);
    }

    searchCountry = (text) => {
        return cx.countryList
            .filter(country => country.country_name.toLowerCase().indexOf(text.toLowerCase()) > -1);
    }

    render() {
        return (
            <React.Fragment>
                <Text>{this.props.label}</Text>
                <Item>
                    <Input selectTextOnFocus value={this.state.selectedCountry} placeholder="..." onChangeText={(text) => {
                        this.setState({
                            selectedCountry: text,
                            countryList: this.searchCountry(text)
                        })
                    }} />
                </Item>
                <List dataArray={this.state.countryList}
                    renderRow={(country) =>
                        <ListItem onPress={() => {
                            this.setState({
                                selectedCountry: country.country_name,
                                countryList: []
                            })
                            cx.setState("HomeScreen", this.props.stateName, country.country_name);
                        }}>
                            <Text>{country.country_id}</Text>
                            <Text note>{country.country_name}</Text>
                            <Text note>{country.country_areacode}</Text>
                        </ListItem>
                    }>
                </List>
            </React.Fragment>
        );
    }
}
