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
import Suggested from "../../components/Home/suggested/Suggested";

export default function HomeScreen() {
  const user = useAuthentication();
  return (
    <VStack space="5">
      <HStack space="5" justifyContent="space-between">
        <Box w="100%">
          {/* <Button borderTopRadius={50} p="1" colorScheme="info">
            <Text fontFamily="Manrope-ExtraBold" color="white">
              Switch Location
            </Text>
          </Button> */}
          <VStack space={5} bg="#FFFFFF" py="4" px="3" borderRadius="5" rounded="xl" flex="2" size="lg">
            <HStack justifyContent="space-between">
              <Box justifyContent="space-between">
                <VStack space={5}>
                  <HStack space={5}>
                    <Text fontSize="xl" fontFamily="Manrope-ExtraBold" color="#28234A">
                      4
                    </Text>
                    <Text sub>Currently trading</Text>
                  </HStack>

                  <Text bold fontFamily="Manrope-Regular" fontSize="xs">
                    All locations
                    <Text bold color="#7E7B93">
                      : Combined overview
                    </Text>
                  </Text>
                  <HStack space={2}>
                    <Button rounded="xl" size="md" bg="#e8f0fc">
                      <Text color="#2c64e3" fontFamily="Manrope-ExtraBold">
                        + Add Location
                      </Text>
                    </Button>
                    <IconButton
                      rounded="xl"
                      size="md"
                      bg="#e8f0fc"
                      variant="solid"
                      _icon={{
                        color: "#2c64e3",
                        as: AntDesign,
                        name: "ellipsis1",
                        size: "lg",
                      }}
                    />
                  </HStack>
                </VStack>
              </Box>
              <Box>
                <IconButton
                  rounded="xl"
                  bg="#e8f0fc"
                  variant="solid"
                  _icon={{
                    as: Entypo,
                    color: "#2c64e3",
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

      <HStack justifyContent={"space-between"}>
        <Text fontFamily="Manrope-Bold" sub color="#7E7B93">
          Actions
        </Text>
        <Text sub>See all</Text>
      </HStack>
      <Box>
        <Box bg="white" h="50" rounded="xl" w="100%"></Box>
      </Box>

      <Text sub fontFamily="Manrope-Bold" color="#7E7B93">
        Suggested for You
      </Text>
      <Box>
        <SuggestedList />
      </Box>
      <HStack justifyContent={"space-between"}>
        <Text fontFamily="Manrope-Bold" sub color="#7E7B93">
          Assets
        </Text>
        <Text sub>See all</Text>
      </HStack>
      <Box>
        <SuggestedList />
      </Box>
      <HStack justifyContent={"space-between"}>
        <Text fontFamily="Manrope-Bold" sub color="#7E7B93">
          Scheduled
        </Text>
        <Text sub>See all</Text>
      </HStack>
      <Box>
        <Box bg="white" h="50" rounded="xl" w="100%"></Box>
      </Box>
      <HStack space={3} h="150">
        <Box p="5" rounded="xl" bg="black" flex="2">
          <Text sub fontFamily="Manrope-Bold" color="#7E7B93">
            Spent this month
          </Text>
        </Box>
        <Box p="5" flex="2" bg="black" rounded="xl">
          <Text sub fontFamily="Manrope-Bold" color="#7E7B93">
            Track your activity and see more, set up a watcher.
          </Text>
          <Button size="md">+ set up</Button>
        </Box>
      </HStack>
      <Text sub fontFamily="Manrope-Bold" color="#7E7B93">
        Suggested for You
      </Text>
      <Box>
        <SuggestedList />
      </Box>
      <Center w="100%">
        <Button>Edit Feed</Button>
      </Center>
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
      avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujitha Mathur",
      timeStamp: "11:11 PM",
      recentText: "Cheer up, there!",
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
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
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
  ];
  return (
    <Box>
      <FlatList
        horizontal
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <Suggested item={item} />}
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
