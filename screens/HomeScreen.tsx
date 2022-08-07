import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import Navigator from '../navigation/Navigator';
import { Box ,Text, Heading,Center,HStack,VStack,Divider,Image,Pressable} from 'native-base';


export default function HomeScreen() {
  const { user } = useAuthentication();
  return (
    <HStack bg="#EFF5F8">
<Navigator/>
<HStack p="10">
<Box>
<Heading color="#2D284E">Hello there admin@example.com</Heading>
<Text fontFamily="Manrope-Light" color="#28234A">Here is some information we gathered about your store
</Text>

<HStack mt="10" justifyContent="space-between">

<Box mr="2"  bg="#FFFFFF" py="4" px="3" borderRadius="5" rounded="md" width={375} maxWidth="100%">
       <HStack justifyContent="space-between">
         <Box justifyContent="space-between">
           <VStack>
             <Text fontSize="xl" fontFamily="Manrope-Regular" color="#28234A">
               Orders
             </Text>
             <Text color="#7E7B93" fontFamily="Manrope-Bold" fontSize="xs">
Today                  </Text>
           </VStack>

           <Pressable mx="10" py="1">
             <Text textTransform="uppercase" alignText="center" fontSize="3xl"  fontFamily="Manrope-Light" color="#28234A">
             PLN0.00
             </Text>
           </Pressable>

         </Box>
         <Image source={{
         uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
       }} alt="Aang flying and surrounded by clouds" height="100" rounded="full" width="100" />
       </HStack>
     </Box>

     <Box ml="2"  bg="#FFFFFF" py="4" px="3" borderRadius="5" rounded="md" width={375} maxWidth="100%">
            <HStack justifyContent="space-between">
              <Box justifyContent="space-between">
                <VStack>
                  <Text fontSize="xl" fontFamily="Manrope-Regular" color="#28234A">
                    Orders
                  </Text>
                  <Text color="#7E7B93" fontFamily="Manrope-Bold" fontSize="xs">
Today                  </Text>
                </VStack>

                <Pressable mx="10" py="1">
                  <Text textTransform="uppercase" alignText="center" fontSize="3xl"  fontFamily="Manrope-Light" color="#28234A">
                  PLN0.00
                  </Text>
                </Pressable>

              </Box>
              <Image source={{
              uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
            }} alt="Aang flying and surrounded by clouds" height="100" rounded="full" width="100" />
            </HStack>
          </Box>
</HStack>


<Box my="5" bg="#FFFFFF" py="4" px="3" borderRadius="5" rounded="md" width={"100%"} maxWidth="100%">
       <HStack justifyContent="space-between">
         <Box justifyContent="space-between">
           <VStack>
             <Text fontSize="xl" fontFamily="Manrope-Regular" color="#28234A">
               Orders
             </Text>
             <Text color="#7E7B93" fontFamily="Manrope-Bold" fontSize="xs">
Today                  </Text>
           </VStack>

           <Pressable mx="10" py="1">
             <Text textTransform="uppercase" alignText="center" fontSize="3xl"  fontFamily="Manrope-Light" color="#28234A">
             PLN0.00
             </Text>
           </Pressable>

         </Box>
         <Image source={{
         uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
       }} alt="Aang flying and surrounded by clouds" height="100" rounded="full" width="100" />
       </HStack>
     </Box>
</Box>

<Box borderRadius="10" margin="10" p="5" bg="white" width={100}>
<Text>Activity</Text>
</Box>
</HStack>
    </HStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#EFF5F8',
  },
  button: {
    marginTop: 10
  }
});
