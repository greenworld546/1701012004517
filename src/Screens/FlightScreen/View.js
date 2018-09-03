import React, { Component } from 'react'

export default class FlightScreen extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderWithBack title="Flight" />
                <Content style={styles.container}>
                    <Tabs>
                        <Tab heading={<TabHeading><Text>Step 1</Text></TabHeading>}>

                            <ExDatePicker text="Mau Berangkat Kapan?" id="DatePick" iconName="plane" />
                            <ExDatePicker text="Mau Pulang Kapan?" id="DatePick" iconName="home" />

                            <ExSearchCity text="Kota Asal" value="Jakarta (JKTA)" id="KotaAsal" iconName="home" />
                            <ExSearchCity text="Kota Tujuan" value="Surabaya (SUB)" id="KotaTujuan" iconName="chatbubbles" />

                            <ExSearchPassenger text="Passenger" value="2 Adult" id="KotaAsal" iconName="home" />
                            <ExSearchClass text="Class" value="Economy" id="KotaTujuan" iconName="chatbubbles" />

                        </Tab>

                        <Tab heading={<TabHeading><Text>Step 2</Text></TabHeading>}>

                            <ExSearchPassenger text="Destination" value="YourArrivalCity" iconName="plane" />
                            <ExDatePicker text="Check In Date" id="DatePick" iconName="calendar " />
                            <ExSearchPassenger text="Duration" value="2 night(s)" id="KotaAsal" iconName="home" />
                            <ExSearchClass text="Total Guest" value="3 guest(s), 2 room(s)" id="KotaTujuan" iconName="chatbubbles" />

                        </Tab>
                        <Tab heading={<TabHeading><Text>Step 3</Text></TabHeading>}>

                        </Tab>

                    </Tabs>
                </Content>
            </React.Fragment>
        )
    }
}