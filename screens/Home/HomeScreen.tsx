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
    <HStack mt="10" justifyContent="space-between">
      <Box
        mr="2"
        bg="#FFFFFF"
        py="4"
        px="3"
        borderRadius="5"
        rounded="md"
        width={375}
        maxWidth="100%"
      >
        <HStack justifyContent="space-between">
          <Box justifyContent="space-between">
            <VStack>
              <Text fontSize="xl" fontFamily="Manrope-Regular" color="#28234A">
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
