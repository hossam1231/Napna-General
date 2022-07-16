import { Box, NativeBaseProvider } from 'native-base'
import React from 'react'

const App = () => {
  return (
	<NativeBaseProvider>
		<Box w="20" h="20" bg="black">

		</Box>
	</NativeBaseProvider>
  )
}

export default App