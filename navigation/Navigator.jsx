import React from "react";
import {
  Box,
  Text,
  Image,
  FlatList,
  Heading,
  HStack,
  Pressable,
} from "native-base";
import { navigatorData } from "../data/NavigatorData";
import { AntDesign } from "@expo/vector-icons";
import {
  useNavigationContainerRef,
  createNavigationContainerRef,
} from "@react-navigation/native";
import LoadingScreen from "../screens/loading/loadingScreen";

export const navigationRef = createNavigationContainerRef();

export default function Navigator() {
  if (navigationRef.isReady()) {
    const route = navigationRef.getCurrentRoute();
    console.log(route);
    return (
      <Box pr="5" bg="#EFF5F8" w="200px" h="100vh">
        <Box position="absolute" bottom="10">
          <Image
            m="10"
            source={require("../assets/logo.jpg")}
            borderRadius="10px"
            alt="Alternate Text"
            size="md"
          />
          <Box w="100%">
            {/* <Heading fontSize="xl" p="4" pb="3">
            Inbox
          </Heading> */}
            <FlatList
              data={navigatorData}
              renderItem={({ item }) => (
                <Pressable
                  key={item.route}
                  borderTopRightRadius="10"
                  borderBottomRightRadius="10"
                  bg={route.name == item.route ? "white" : "#EFF5F8"}
                  onPress={() => navigationRef.navigate(item.route)}
                >
                  <HStack alignItems="Center" mt="2" m="1" w="100%" p="10px">
                    <AntDesign
                      name={item.icon}
                      size={24}
                      color={route.name == item.route ? "#28234A" : "#787790"}
                    />
                    <Text
                      color={route.name == item.route ? "#28234A" : "#787790"}
                      fontFamily="Manrope-ExtraBold"
                      ml="5"
                    >
                      {item.name}
                    </Text>
                  </HStack>
                </Pressable>
              )}
              keyExtractor={(item) => item.route}
            />
          </Box>
        </Box>
      </Box>
    );
    // navigationRef.navigate(name, params);
  } else {
    return <></>;
  }
}
