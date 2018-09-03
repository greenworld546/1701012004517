import React, { Component } from 'react'

export default class ExButton extends Component {

    onPressEvent = () => {;
        eventName = `on${this.componentName}Press`;
        if (EventAdministration[eventName] === undefined) {
            alert(`${eventName} belum diregister`);
            return;
        }
        EventAdministration[`on${this.componentName}Press`]();
    }

    componentDidMount() {
        this.componentName = this.props.id.replace("'", "")
            .replace("+", "")
            .replace(".", "")
            .replace(" ", "");
    }

    render() {
        return (
            <Button onPress={this.onPressEvent}>
                <Text>{this.props.text}</Text>
            </Button>
        )
    }
}