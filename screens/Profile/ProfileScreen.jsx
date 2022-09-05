import { Entypo } from '@expo/vector-icons'
import {IconButton,Icon, VStack,Text ,Box} from 'native-base'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 


const ProfileScreen = () => {
  return (
<VStack  p='5'`


































































































































































































  safeArea flex='1' bg='black' >
{/* francis */}
<IconButton icon={<Icon as={AntDesign} name="arrowleft" />} w="25" h='25' borderRadius="full" _icon={{
      color: "white",
      size: "md"
    }} _hover={{
      bg: "orange.600:alpha.20"
    }} _pressed={{
      bg: "orange.600:alpha.20",
      _icon: {
        name: "emoji-flirt"
      },
      _ios: {
        _icon: {
          size: "2xl"
        }
      }
    }} _ios={{
      _icon: {
        size: "2xl"
      }
    }} />
{/* hossam */}


</VStack>
  )
}

export default ProfileScreen