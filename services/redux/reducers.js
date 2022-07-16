import {
	SET_USER,
	SET_USER_ID,
	SET_PHONE,
	SET_NAME,
	SET_PASSWORD,
	SET_USERNAME,
	SET_EMAIL,
} from "./actions";

const initialStateUser = {
	user: [],
	userID: [],
};

export function userReducer(state = initialStateUser, action) {
	switch (action.type) {
		case SET_USER:
			return { ...state, user: action.payload };
		case SET_USER_ID:
			return { ...state, userID: action.payload };
		default:
			return state;
	}
}

const initialStateAuth = {
	user: [],
	userID: [],
};

export function authReducer(state = initialStateAuth, action) {
	switch (action.type) {
		case SET_PHONE:
			return { ...state, phone: action.payload };
		case SET_NAME:
			return { ...state, name: action.payload };
		case SET_PASSWORD:
			return { ...state, password: action.payload };
		case SET_USERNAME:
			return { ...state, username: action.payload };
		case SET_EMAIL:
			return { ...state, email: action.payload };
		default:
			return state;
	}
}

export default userReducer;
