export default class StateManager {
    /*
       Dynamic Getter and Setter,
       Tujuannya untuk mengubah nilai state variable antar komponen secara spesifik,
       dengan mengikut sertakan nama class-nya.
  
       Kelebihan:
       Lebih mudah untuk mengubah state antar komponen tanpa perlu State Manager maupun ContextAPI
  
       Kekurangan:
       Harus meregister Instance di fungsi componentDidMount()
    */
    static instanceList = [];
    static registerInstance(instance, loadStateStorage = false) {
        instanceName = instance.constructor.name;
        StateManager.instanceList[instanceName] = instance;

        if (loadStateStorage) {

            for (stateName of Object.keys(StateManager.instanceList[instanceName].state)) {
                StateManager.getStorage(`${instanceName}.${stateName}`);
            }

        }

    }

    static getState(instanceName, stateName) {
        if (!StateManager.instanceList[instanceName]) {
            alert(`Gotcha! ${instanceName} is not registered!`);
            return;
        }
        return StateManager.instanceList[instanceName].state[stateName];
    }

    static setState(instanceName, stateName, value, isSavedToStorage = false) {
        if (!StateManager.instanceList[instanceName]) {
            alert(`Gotcha! ${instanceName} is not registered!`);
            return;
        }

        StateManager.instanceList[instanceName].setState({
            [stateName]: value
        });

        if (isSavedToStorage) {
            StateManager.setStorage(instanceName + "." + stateName, value);
        }
    }

    static setMultiState(instanceName, stateListWithNameAndValue, isSavedToStorage) {
        if (!StateManager.instanceList[instanceName]) {
            alert(`Gotcha! ${instanceName} is not registered!`);
            return;
        }

        StateManager.instanceList[instanceName].setState(stateListWithNameAndValue);

        if (isSavedToStorage) {
            StateManager.setStorage(instanceName + "." + stateName, value);
        }
    }

    /*
      Dynamic Getter and Setter StateStorageSync
   
      Memiliki fungsi yang sama dengan DynamicGetter and Setter,
      Hanya saja, nilai state akan disimpan ke storage ketika ada perubahan.
      Serta, nila state akan di load ketika pertama x diminta.
   
      ***EXPERIMENTAL MODE**** 
      PERFORMA belum ditest
   
    */

    static async getStorage(stateNameAsStorageName) {
        try {
            const value = await AsyncStorage.getItem(stateNameAsStorageName);

            if (value == null) {
                console.log("You try to getStorage for : " + stateNameAsStorageName + " but the value is null");
            }
            else {
                console.log("You try to getStorage for : " + stateNameAsStorageName + " and the value is > " + value);

                instanceName = stateNameAsStorageName.split(".")[0];
                stateName = stateNameAsStorageName.split(".")[1];

                StateManager.setState(instanceName, stateName, value)

            }



        } catch (error) {
            alert("Error retrieving data" + error);
        }
    }

    static async setStorage(stateNameAsStorageName, value) {
        try {
            await AsyncStorage.setItem(stateNameAsStorageName, JSON.stringify(value));
            console.log("Data Savedxxx");
        } catch (error) {
            alert("Error saving data" + error);
        }
    }
}