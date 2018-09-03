import React, { Component } from 'react'

export default class ExDatePicker extends Component {

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
            <Item style={{
                backgroundColor: this.state.focusedColor
            }}>

                <View style={{
                    flex: 1
                }}>

                    <Label style={{
                        color: 'green',
                        paddingLeft: 30
                    }}>{this.props.text}</Label>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}>
                        <Icon active name={this.props.iconName} style={{
                            paddingTop: 10
                        }} />
                        <DatePicker style={{
                            backgroundColor: 'red'
                        }}
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
                    </View>


                </View>

            </Item >
        )
    }
}