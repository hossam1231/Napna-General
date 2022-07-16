import React from "react";
import { Spinner, Center, Heading, HStack } from "native-base";

const LoadingScreen = () => {
	return (
		<Center flex="1">
			{/* napna logo */}
			<Loading />
		</Center>
	);
};

export const Loading = () => {
	return (
		<HStack space={2} justifyContent="center">
			<Spinner accessibilityLabel="Loading posts" />
			<Heading color="black" fontSize="md">
				Loading
			</Heading>
		</HStack>
	);
};

export default LoadingScreen;
