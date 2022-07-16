// react
import React, { useState, useEffect, useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Platform } from "react-native";
import "react-native-gesture-handler";

// nativebase
import { Spinner, Center, Heading, HStack } from "native-base";

// import root navigator
import Navigation from "../../navigation/Navigation";

// importing services
import useCachedResources from "../../hooks/useCachedResources";

export const LoadingScreen = ({
	spinnerColor,
	textColor,
	accessibilityLabel,
}) => {
	const isLoadingComplete = useCachedResources();

	if (!isLoadingComplete) {
		if (Platform.OS === "web") {
			return (
				<Loading
					backgroundColor={"#FFFFFF"}
					spinnerColor={spinnerColor}
					textColor={textColor}
					accessibilityLabel={accessibilityLabel}
				/>
			);
		}
		return (
			<Loading
				backgroundColor={"#FFFFFF"}
				spinnerColor={spinnerColor}
				textColor={textColor}
				accessibilityLabel={accessibilityLabel}
			/>
		);
	}

	return <Navigation />;
};

export const Loading = ({
	spinnerColor,
	textColor,
	accessibilityLabel,
	backgroundColor,
}) => {
	return (
		<Center bg={backgroundColor} flex="1">
			{/* napna logo */}
			<HStack space={2} justifyContent="center">
				<Spinner color={spinnerColor} accessibilityLabel={accessibilityLabel} />
				<Heading color={textColor} fontSize="md">
					Loading
				</Heading>
			</HStack>
		</Center>
	);
};

export default LoadingScreen;
