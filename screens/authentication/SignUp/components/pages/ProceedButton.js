// react
import React from "react";
import { useEffect, useState } from "react";

// nativebase
import { Button, HStack, Text, CheckIcon } from "native-base";

export const ProceedButton = ({ value }) => {
	const [isProceedShown, setProceedShown] = useState(false);
	const [authData, setAuthData] = useState([]);

	// Load any resources or data that we need prior to rendering the app
	useEffect(() => {
		async function isProceedShownAsync() {
			try {
				setAuthData(...authData, value);
			} catch (e) {
				// We might want to provide this error information to an error reporting service
				console.warn(e);
			} finally {
				//do what you need here
				setValue();
				setProceedShown(true);
			}
		}
		if (value) {
			isProceedShownAsync();
		}
	}, [value]);

	useEffect(() => {
		console.log("AUTHDATA", authData);
	}, [authData]);

	if (isProceedShown) {
		return (
			<Button
				mt="2"
				size="md"
				borderRadius="4"
				_text={{
					fontSize: "sm",
					fontWeight: "medium",
					fontFamily: "Manrope-Light",
				}}
				_light={{
					bg: "primary.900",
				}}
				_dark={{
					bg: "primary.700",
				}}
				onPress={() => {
					// props.navigation.navigate("OTP");
				}}
			>
				<HStack alignItems="center">
					<CheckIcon size="5" mr="2" color="white"></CheckIcon>
					<Text color="white" fontFamily="Manrope-ExtraBold">
						Proceed
					</Text>
				</HStack>
			</Button>
		);
	} else return <></>;
};

export default ProceedButton;
