import { Entypo, AntDesign } from "@expo/vector-icons";
import {
  IconButton,
  Icon,
  Button,
  VStack,
  Text,
  Box,
  Center,
  Heading,
  Input,
  FormControl,
  Link,
  HStack,
  Spinner,
} from "native-base";
import React from "react";

let size = "25";

export default function ProfileScreen() {
  return (
    <Center w="100%">
      <Box safeArea p={"2"} py="8" w="90%" maxW={"500"}>
        <VStack space={5}>
          <HStack justifyContent={"space-between"}>
            <Heading fontFamily="Manrope-Bold">Task</Heading>
            <IconButton
              size={size}
              _icon={{
                as: AntDesign,
                color: "black",
                name: "ellipsis1",
              }}
            />
          </HStack>
          <Box rounded={"lg"} p="5" h="100" w="100%" bg="black">
            <HStack w="100%" justifyContent={"space-between"}>
              <VStack space={3}>
                <Text
                  color="white"
                  fontSize={"xl"}
                  fontFamily="Manrope-ExtraBold"
                >
                  44:55:22
                </Text>
                <HStack alignItems="center" space={2}>
                  <Spinner color="white" />
                  <Text
                    color="white"
                    sub
                    fontFamily="Manrope-Bold"
                    fontSize={"4xl"}
                  >
                    ranison project
                  </Text>
                </HStack>
              </VStack>
              <Box>
                <IconButton
                  size={size}
                  _icon={{
                    color: "white",
                    as: Entypo,
                    name: "chevron-right",
                  }}
                />
              </Box>
            </HStack>
          </Box>
          <HStack justifyContent={"space-between"} alignItems="center">
            <Box h="20">
              <Heading fontFamily="Manrope-Bold">Today</Heading>
            </Box>
            <Box h="20">
              <Text sub fontFamily="Manrope-ExtraBold ">
                See all
              </Text>
            </Box>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
}
