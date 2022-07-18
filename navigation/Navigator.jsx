import React from 'react'
import {Box, Text, FlatList, Heading, HStack} from "native-base";
import { navigatorData } from '../data/NavigatorData';
const Navigator = () => {
  return (
  <Box bg="#EFF5F8" w="200px" h="100vh" borderWidth="1px" borderColor="black" position="absolute" left="0">
 <Box w="100%" position='absolute' bottom="0">

      {/* <Heading fontSize="xl" p="4" pb="3">
        Inbox
      </Heading> */}
      <FlatList data={navigatorData} renderItem={({
      item
    }) => 
    <HStack alignItems="Center" p="10px">
    {item.icon}
    <Text ml="5">
      {item.name}
    </Text>
    </HStack>
    } keyExtractor={item => item.id} />
    </Box>

  </Box>
  )
}

export default Navigator