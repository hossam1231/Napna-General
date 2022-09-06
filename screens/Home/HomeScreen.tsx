import React from "react";
import { StyleSheet, View } from "react-native";
import { useAuthentication } from "../../utils/hooks/useAuthentication";
import Navigator from "../../navigation/Navigator";
import { AntDesign, Entypo } from "@expo/vector-icons";
import {
  Box,
  Text,
  Avatar,
  Spacer,
  Heading,
  ScrollView,
  Button,
  Icon,
  IconButton,
  Center,
  FlatList,
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

          <SuggestedList />
        </HStack>
      </ScrollView>
    </VStack>
  );
}

const SuggestedList = () => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Aafreen Khan",
      timeStamp: "12:47 PM",
      recentText: "Good Day!",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujitha Mathur",
      timeStamp: "11:11 PM",
      recentText: "Cheer up, there!",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      recentText: "Good Day!",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      recentText: "All the best",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
  ];
  return (
    <Box>
      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => (
          <Box
            _dark={{
              borderColor: "muted.50",
            }}
            borderColor="muted.800"
            pl={["0", "4"]}
            pr={["0", "5"]}
            py="2"
          >
            <HStack space={[2, 3]} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                >
                  {item.fullName}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.recentText}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="xs"
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

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
