import React, { Component } from 'react'
import SearchCountry from '../../Components/SearchCountry/SearchCountry';
import ExDatePicker from '../../Components/Forms/ExDatePicker/ExDatePicker';
import ExSearchCity from '../../Components/Forms/ExSearchCity/ExSearchCity';

export default class EatScreen extends Component {
    state = {
        lat: "0",
        lng: "0"
    }

    componentDidMount() {
        SM.registerInstance(this);
    }

    render() {
        return (
            <React.Fragment>
                <HeaderWithBack title="Eats" />
                <Content style={styles.container}>
                    <Tabs>
                        <Tab heading={<TabHeading><Text>Step 1</Text></TabHeading>}>

                     
                        </Tab>

                        <Tab heading={<TabHeading><Text>Step 2</Text></TabHeading>}>

                        </Tab>
                        <Tab heading={<TabHeading><Text>Step 3</Text></TabHeading>}>

                        </Tab>

                    </Tabs>
                </Content>
            </React.Fragment >
        )
    }
}