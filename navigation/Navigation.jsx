import React, { useState, useLayoutEffect, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "../screens/authentication/SignUp/Index";
import SignIn from "../screens/authentication/SignIn/Index";
import OtpVerification from "../screens/authentication/OTP/Index";
import { getObj } from "../data/localStorage";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setUserID, setUser } from "../../Napna-Merchant/services/redux/actions";

// navigation
const Stack = createNativeStackNavigator();

export default function Navigation({ navigation }) {
	// redux
	const { userID } = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();

	if (!userID) {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					{/* <Stack.Screen
						name="GetStarted"
						component={GetStarted}
						options={{ headerShown: false }}
					/> */}
					<Stack.Screen
						name="SignIn"
						component={SignIn}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="SignUp"
						component={SignUp}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="OTP"
						component={OtpVerification}
						options={{ headerShown: false }}
						getDestination={({ params }) => params.destination}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	} else if (userID) {
		if (userID.status == "unconfirmed") {
			<NavigationContainer>
				<Stack.Screen
					name="OTP"
					component={OtpVerification}
					options={{ headerShown: false }}
					getDestination={({ params }) => params.destination}
				/>
			</NavigationContainer>;
		} else {
			return (
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="Home"
							component={HomeScreen}
							options={{ headerShown: false }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			);
		}
	}
}
