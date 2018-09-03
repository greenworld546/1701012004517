export default class FooterTabScreenLogic {
    static registerEvent() {
        EA.onHomePress = () => {
            alert("NiceOne");
        }

        EA.onMyBookingPress = () => {
            navigation.navigate("FlightScreen");
        }
    }
}