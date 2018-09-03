import React, { Component } from 'react'

export default class FooterTabScreen extends Component {

    render() {
        return (
            <Footer>
                <FooterTab>
                    <FooterTabItem iconName="home" text="Home"/>
                    <FooterTabItem iconName="cart" text="MyBooking"/>
                    <FooterTabItem iconName="text" text="Message"/>
                    <FooterTabItem iconName="person" text="MyAcc."/>
                </FooterTab>
            </Footer>
        )
    }
}