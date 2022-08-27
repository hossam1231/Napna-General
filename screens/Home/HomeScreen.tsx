import React from "react";
import { StyleSheet, View } from "react-native";
import { useAuthentication } from "../../utils/hooks/useAuthentication";
import { Button } from "react-native-elements";
import Navigator from "../../navigation/Navigator";
import {
  Box,
  Text,
  Heading,
  Center,
  HStack,
  VStack,
  Divider,
  Image,
  Pressable,
} from "native-base";

export default function HomeScreen() {
  const { user } = useAuthentication();
  return (
    <VStack space="5">
      <HStack space="5" justifyContent="space-between">
        <Box bg="#FFFFFF" borderRadius="5" rounded="md" flex="2" h="20">
          <HStack justifyContent="space-between">
            <Box justifyContent="space-between">
              <VStack>
                <Text
                  fontSize="xl"
                  fontFamily="Manrope-Regular"
                  color="#28234A"
                >
                  Orders
                </Text>
                <Text color="#7E7B93" fontFamily="Manrope-Bold" fontSize="xs">
                  Today{" "}
                </Text>
              </VStack>
            </Box>
          </HStack>
        </Box>
        <Box
          bg="#FFFFFF"
          py="4"
          px="3"
          borderRadius="5"
          rounded="md"
          flex="2"
          h="20"
        >
          <HStack justifyContent="space-between">
            <Box justifyContent="space-between">
              <VStack>
                <Text
                  fontSize="xl"
                  fontFamily="Manrope-Regular"
                  color="#28234A"
                >
                  Orders
                </Text>
                <Text color="#7E7B93" fontFamily="Manrope-Bold" fontSize="xs">
                  Today{" "}
                </Text>
              </VStack>
            </Box>
          </HStack>
        </Box>
      </HStack>
      <HStack space="2" justifyContent="space-between">
        <Box
          bg="#FFFFFF"
          py="4"
          px="3"
          borderRadius="5"
          rounded="md"
          flex="2"
          h="20"
        >
          <HStack justifyContent="space-between">
            <Box justifyContent="space-between">
              <VStack>
                <Text
                  fontSize="xl"
                  fontFamily="Manrope-Regular"
                  color="#28234A"
                >
                  Orders
                </Text>
                <Text color="#7E7B93" fontFamily="Manrope-Bold" fontSize="xs">
                  Today{" "}
                </Text>
              </VStack>
            </Box>
          </HStack>
        </Box>
      </HStack>
      <HStack space="2" justifyContent="space-between">
        <Box
          bg="#FFFFFF"
          py="4"
          px="3"
          borderRadius="5"
          rounded="md"
          flex="2"
          h="20"
        >
          <HStack justifyContent="space-between">
            <Box justifyContent="space-between">
              <VStack>
                <Text
                  fontSize="xl"
                  fontFamily="Manrope-Regular"
                  color="#28234A"
                >
                  Orders
                </Text>
                <Text color="#7E7B93" fontFamily="Manrope-Bold" fontSize="xs">
                  Today{" "}
                </Text>
              </VStack>
            </Box>
          </HStack>
        </Box>
      </HStack>
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
