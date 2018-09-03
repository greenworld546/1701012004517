import React, { Component } from 'react'

export default class ExInput extends Component {

    onRealtimeValidation = (text) => {
        format = this.props.format;
        switch (format) {
            case "name":
                if (text.indexOf("1") > -1) {

                }
                break;
            case "email":
                break;
            default:
                break;
        }
        global[`${this.componentName}Value`] = text;
    }

    componentDidMount() {
        this.componentName = this.props.id.replace("'", "")
            .replace("+", "")
            .replace(".", "")
            .replace(" ", "");
        global[`${this.componentName}Value`] = "";
    }

    onChangeTextEvent = (text) => {
        eventName = `on${this.componentName}ChangeText`;
        if (EventAdministration[eventName] === undefined) {
            alert(`${eventName} belum diregister`);
            return;
        }

        this.onRealtimeValidation(text);
        EventAdministration[`on${this.componentName}ChangeText`]();
    }

    state = {
        onFocusColor: 'red',
        onBlurColor: '#FFF',
        focusedColor: '#FFF'
    }

    render() {
        return (
            <Item floatingLabel style={{
                backgroundColor: this.state.focusedColor
            }}>
                <Label style={{
                    color: 'green'
                }}>{this.props.text}</Label>
                <Input onBlur={() => {
                    this.setState({
                        'focusedColor': this.state.onBlurColor
                    })
                }} onFocus={() => {
                    this.setState({
                        'focusedColor': this.state.onFocusColor
                    })
                }} onChangeText={this.onChangeTextEvent} />
            </Item >
        )
    }
}