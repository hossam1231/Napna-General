import React from "react";
import { Box, Text, Heading } from "native-base";
import { BlurView } from "expo-blur";

const SearchFiltersScreen = () => {
	return (
		<Box p="10">
			<Heading>Filters</Heading>
			<BottomDoneButton />
		</Box>
	);
};

export const BottomDoneButton = () => {
	return (
		<BlurView intensity={80} tint="light">
			<Box p="10" flex="1">
				<Box bg="black" w="80%">
					<Text color="white">Done</Text>
				</Box>
			</Box>
		</BlurView>
	);
};

export default SearchFiltersScreen;
