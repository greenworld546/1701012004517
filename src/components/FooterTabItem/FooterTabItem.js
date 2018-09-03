import React, { Component } from 'react'

export default class FooterTabItem extends Component {
    render() {
        return (
            <Button vertical onPress={() => {
                let buttonName = this.props.text.replace("'", "").replace("+", "").replace(" ","");
                if (EventAdministration[`on${buttonName}Press`] === undefined) {
                    alert("Event belum diregister");
                    return;
                }
                EventAdministration[`on${buttonName}Press`]();
            }}>
                <Icon name={this.props.iconName} />
                <Text>{this.props.text}</Text>
            </Button>
        )
    }
}