import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useLayoutEffect, useEffect } from "react";

import HomeScreen from "../screens/home/HomeScreen";

import { NavigationContainer } from "@react-navigation/native";



// navigation
const Stack = createNativeStackNavigator();

export default function Navigation({ navigation }) {
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
		
	)
}
