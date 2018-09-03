import React, { Component } from 'react'

export default class MainMenuScreen extends Component {
    render() {
        return (
            <React.Fragment>
                <View style={styles.mainMenuContainer}>

                    <MenuItem text="Flight" iconName="home" />
                    <MenuItem text="Hotels" iconName="home" />
                    <MenuItem text="Flight+Hotel" iconName="chatbubbles" />
                    <MenuItem text="Eats" iconName="home" />

                </View>

                <View style={styles.mainMenuContainer}>

                    <MenuItem text="TourGuide" iconName="home" />
                    <MenuItem text="LiveTravel's" iconName="home" />
                    <MenuItem text="Traveling Tip's" iconName="home" />
                    <MenuItem text="Traveling Tool's" iconName="home" />

                </View>
            </React.Fragment>
        )
    }
}