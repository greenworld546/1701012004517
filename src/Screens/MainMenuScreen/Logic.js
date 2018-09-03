export default class MainMenuScreenLogic {
    static registerEvent() {

        EA.onFlightPress = () => {
            navigation.navigate("FlightScreen");
        }

        EA.onHotelsPress = () => {
            navigation.navigate("HotelScreen");
        }

        EA.onFlightHotelPress = () => {
            navigation.navigate("FlightAndHotelScreen");
        }

        EA.onEatsPress = () => {
            navigation.navigate("EatScreen");
        }

        

    }
}