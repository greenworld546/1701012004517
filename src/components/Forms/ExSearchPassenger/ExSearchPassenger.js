import React, { Component } from 'react'
export default class ExSearchPassenger extends Component {
    render() {
        return (
            <Item stackedLabel style={{
                paddingLeft: 10
            }}>
                <Label>{this.props.text}</Label>
                <Icon active name={this.props.iconName} />
                <Input value={this.props.value} disabled/>

            </Item >
        )
    }
}