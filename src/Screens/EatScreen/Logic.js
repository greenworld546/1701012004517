export default class EatScreenLogic {

    static registerEvent() {
        EA.onGetCoordinatesPress = () => {
            alert(UsernameValue);
        }

        EA.onUsernameChangeText = () => {
            EatScreenLogic.getCoordinates();
        }

        EA.onNoKTPChangeText = () => {

        }
    }

    static getCoordinates = () => {
        navigator.geolocation.getCurrentPosition((position) => {

            SM.setMultiState("EatScreen", {
                "lat": position.coords.latitude,
                "lng": position.coords.longitude
            });

        });
    }
}