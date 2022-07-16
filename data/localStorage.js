import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeObj = async ({ value, key }) => {
	console.log("STORING" + key, value);
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem(key, jsonValue);
	} catch (e) {
		// saving error
		console.log(e + "ERROR SAVING");
	}
	console.log("GOOD JOB SAVING √" + "" + key);
};

export const storeStr = async ({ value, key }) => {
	console.log("STORING" + key, value);
	try {
		await AsyncStorage.setItem(key, value);
	} catch (e) {
		// saving error
		console.log(e + "ERROR SAVING");
	}
	console.log("GOOD JOB SAVING √" + "" + key);
};

export const getStr = async (key) => {
	try {
		const value = await AsyncStorage.getItem(key);
		if (value !== null) {
			// value previously stored
		}
	} catch (e) {
		// error reading value
		console.log(e + "ERROR RETRIVING");
	}
	console.log("GOOD JOB RETRIVING √" + "" + key);
	return value;
};

export const getObj = async (key) => {
	try {
		const jsonValue = await AsyncStorage.getItem(key);
		return jsonValue != null ? JSON.parse(jsonValue) : null;
	} catch (e) {
		// error reading value
		console.log(e + "ERROR RETRIVING");
	}
	console.log("GOOD JOB RETRIVING √" + "" + key);
	return jsonValue;
};

export const removeObj = async (key) => {
	try {
		await AsyncStorage.removeItem(key);
	} catch (error) {
		// Error saving data
		console.log(e + "ERROR REMOVING");
	}
	console.log("GOOD JOB REMOVING √" + key);
};

export default null;
