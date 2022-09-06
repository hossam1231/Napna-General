import React from "react";
import { StyleSheet, View } from "react-native";
import { useAuthentication } from "../../utils/hooks/useAuthentication";
import Navigator from "../../navigation/Navigator";
import { AntDesign, Entypo } from "@expo/vector-icons";
import {
  Box,
  Text,
  Heading,
  ScrollView,
  Button,
  Icon,
  IconButton,
  Center,
  HStack,
  VStack,
  Badge,
  Divider,
  Image,
  Pressable,
} from "native-base";

export default function HomeScreen() {
  const user = useAuthentication();
  return (
    <VStack space="5">
      <HStack space="5" justifyContent="space-between">
        <Box w="100%">
          <Button borderTopRadius={50} p="1" colorScheme="info">
            <Text fontFamily="Manrope-ExtraBold" color="white">
              Switch Location
            </Text>
          </Button>
          <VStack
            space={5}
            bg="#FFFFFF"
            py="4"
            px="3"
            borderRadius="5"
            rounded="md"
            flex="2"
            h="auto"
          >
            <HStack justifyContent="space-between">
              <Box justifyContent="space-between">
                <VStack space={5}>
                  <Text
                    fontSize="xl"
                    fontFamily="Manrope-Regular"
                    color="#28234A"
                  >
                    Orders
                  </Text>
                  <Text bold fontFamily="Manrope-Regular" fontSize="xs">
                    All merchants{" "}
                    <Text bold color="#7E7B93">
                      : Combined overview
                    </Text>
                  </Text>
                  <HStack space={2}>
                    <Button>
                      <Text color="white" fontFamily="Manrope-ExtraBold">
                        {" "}
                        + Add Location
                      </Text>
                    </Button>{" "}
                    <IconButton
                      variant="solid"
                      _icon={{
                        as: AntDesign,
                        name: "ellipsis1",
                      }}
                    />
                  </HStack>
                </VStack>
              </Box>
              <Box>
                <IconButton
                  variant="solid"
                  _icon={{
                    as: Entypo,
                    name: "shop",
                  }}
                />
              </Box>
            </HStack>
            <HStack justifyContent={"space-between"}>
              <Text fontFamily="Manrope-Bold" sub color="#7E7B93">
                Activity
              </Text>
              <Text sub>See all</Text>
            </HStack>
          </VStack>
        </Box>
      </HStack>
      <Text sub fontFamily="Manrope-Bold" color="#7E7B93">
        Suggested for You
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} h="80">
        <HStack flex="1">
          {/* {Object.keys(colors.cyan).map((key, index) => {
        if (index >= 1 && index <= 5) return <Center py="4" bg={`cyan.${key}`}>
                {key}
              </Center>;
      })} */}
        </HStack>
      </ScrollView>
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#EFF5F8",
  },
  button: {
    marginTop: 10,
  },
});
