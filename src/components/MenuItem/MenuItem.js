import React, { Component } from 'react'

export default class MenuItem extends Component { 
    render() {
        return (
            <View style={styles.menuItemRootContainer}>
                <Button small style={styles.menuItemButton} onPress={() => {
                    let buttonName = this.props.text.replace("'","").replace("+","");
                    if(EventAdministration[`on${buttonName}Press`]===undefined){
                        alert("Event belum diregister");
                        return;
                    }
                    EventAdministration[`on${buttonName}Press`]();
                }}>
                    <View style={styles.menuItemButtonContainer}>
                        <View style={styles.menuItemIconContainer}>
                            <Icon name={this.props.iconName} />
                        </View>
                        <Text style={styles.menuItemTextContainer}>{this.props.text}</Text>
                    </View>
                </Button>
            </View>
        )
    }
}