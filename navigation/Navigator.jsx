import React from 'react'
import {Box, Text, Image,FlatList, Heading, HStack} from "native-base";
import { navigatorData } from '../data/NavigatorData';
const Navigator = () => {
  return (
  <Box p="5" bg="#EFF5F8" w="200px" h="100vh" borderWidth="1px" borderColor="black" position="absolute" left="0">
  <Box position="absolute" bottom="10">


  <Image source={{
  uri: "https://wallpaperaccess.com/full/317501.jpg"
}} alt="Alternate Text" size="md" />
 <Box w="100%">

      {/* <Heading fontSize="xl" p="4" pb="3">
        Inbox
      </Heading> */}
      <FlatList data={navigatorData} renderItem={({
      item
    }) =>
    <HStack alignItems="Center" bg="grey" mt="2" m="1" w="100%"  p="10px">
    {item.icon}
    <Text className="Manrope800" ml="5">
      {item.name}
    </Text>
    </HStack>
    } keyExtractor={item => item.id} />
    </Box>

  </Box>
  </Box>
  )
}

export default Navigator
