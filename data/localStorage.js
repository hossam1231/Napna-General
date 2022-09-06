import AsyncStorage from "@react-native-async-storage/async-storage";

export const getLocalStorageObject = async ({ key: key }) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log(`Error[returning] ${key} from local storage`);
  }
};

export const setLocalStorageObject = async ({ key: key, value: value }) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return `Good job saving ${key} in local storage!`;
  } catch (e) {
    // saving error
    return `Error[saving] ${key} in local storage`;
  }
};
