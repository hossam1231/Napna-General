import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MoreModal from "../screens/MoreModal";
import CatalogScreen from "../screens/CatalogScreen";
import UserNotFoundScreen from "../screens/UserNotFoundScreen";
import MenuScreen from "../screens/MenuScreen";
import {
  Box,
  Text,
  Image,
  FlatList,
  Heading,
  HStack,
  Pressable,
} from "native-base";
import Navigator from "./Navigator";
import { navigationRef } from "./Navigator";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import LoadingScreen from "../screens/loading/loadingScreen";
import { getIdToken } from "firebase/auth";

const Stack = createStackNavigator();

export default function UserStack({ user }) {
  useEffect(() => {
    if (user) {
      testFunction();
    }
  }, []);

  async function testFunction() {
    console.log("USER", user);
    let APIURL =
      "http://napna.co.uk/.netlify/functions/verifyFirebaseIdToken?token=REPLACE_ME";
    const token = await getIdToken(user, true);
    APIURL = APIURL.replace("REPLACE_ME", token);
    console.log(APIURL, "sending out request");
    await fetch(APIURL).then((response) => console.log(response));
  }

  if (user) {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="More"
            component={MoreModal}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Catalog"
            component={CatalogScreen}
            options={{ headerShown: false }}
          />
          <Stack.Group
            options={{ headerShown: false }}
            screenOptions={{ presentation: "modal" }}
          >
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="UserNotFound" component={UserNotFoundScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <LoadingScreen />;
  }
}
