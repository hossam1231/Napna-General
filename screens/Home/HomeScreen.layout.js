import React from "react";
import HomeScreen from "./HomeScreen";
import {
  Box,
  useDisclose,
  IconButton,
  Stagger,
  HStack,
  Heading,
  Button,
  Text,
  Icon,
  Center,
  NativeBaseProvider,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreenLayout = () => {
  const navigation = useNavigation();

  return (
    <Box flex="1" p="10" bg="#EFF5F8">
      {/* <YourMerchants /> */}
      <HStack justifyContent="space-between">
        <Box>
          <IconButton
            variant="solid"
            borderRadius="full"
            size="lg"
            bg="cyan.400"
            onPress={() => navigation.navigate("Menu")}
            icon={
              <Icon
                as={MaterialCommunityIcons}
                size="6"
                name="dots-horizontal"
                color="warmGray.50"
                _dark={{
                  color: "warmGray.50",
                }}
              />
            }
          />
        </Box>
        <Box>
          <YourMerchants />
        </Box>
      </HStack>
      <Heading fontSize={["4xl"]} color="#2D284E">
        Hello there admin@example.com
      </Heading>
      <Text fontSize={["md"]} fontFamily="Manrope-Light" color="#28234A">
        Here is some information we gathered about your store
      </Text>
      <HomeScreen />
    </Box>
  );
};

const YourMerchants = () => {
  const { isOpen, onToggle } = useDisclose();
  return (
    <>
      <HStack mb="10" alignItems="center">
        <Button
          variant="solid"
          borderRadius="full"
          size="lg"
          onPress={onToggle}
          bg="cyan.400"
        >
          <Text fontFamily="Manrope-Bold" color="white">
            Kaiser Chicken
          </Text>
        </Button>
      </HStack>

      <Box position="fixed" alignItems="center">
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34,
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: false,
              },
            },
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: false,
              },
            },
          }}
        >
          <Button
            mb="4"
            variant="solid"
            bg="indigo.500"
            colorScheme="indigo"
            borderRadius="full"
          >
            <Text fontFamily="Manrope-Bold" color="white">
              Kaiser Chicken
            </Text>
          </Button>
          <Button
            mb="4"
            variant="solid"
            bg="yellow.400"
            colorScheme="yellow"
            borderRadius="full"
          >
            <Text fontFamily="Manrope-Bold" color="white">
              Kaiser Chicken
            </Text>
          </Button>
          <Button
            mb="4"
            variant="solid"
            bg="teal.400"
            colorScheme="teal"
            borderRadius="full"
          >
            <Text fontFamily="Manrope-Bold" color="white">
              Kaiser Chicken
            </Text>
          </Button>
          <Button
            mb="4"
            variant="solid"
            bg="red.500"
            colorScheme="red"
            borderRadius="full"
          >
            <Text fontFamily="Manrope-Bold" color="white">
              Kaiser Chicken
            </Text>
          </Button>
        </Stagger>
      </Box>
    </>
  );
};

export default HomeScreenLayout;
