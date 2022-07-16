import React from "react";

const Page4 = () => {
	return (
		<>
			<Checkbox
				alignItems="flex-start"
				defaultIsChecked
				value="demo"
				colorScheme="primary"
				accessibilityLabel="Remember me"
			>
				<HStack alignItems="center">
					<Text
						fontFamily={"Manrope-Light"}
						fontSize="sm"
						color="coolGray.400"
						pl="2"
					>
						I accept the{" "}
					</Text>
					<Link
						_text={{
							fontSize: "sm",
							fontWeight: "semibold",
							textDecoration: "none",
							fontFamily: "Manrope-Bold",
						}}
						_light={{
							_text: {
								color: "primary.900",
							},
						}}
						_dark={{
							_text: {
								color: "primary.500",
							},
						}}
					>
						Terms of Use
					</Link>
					<Text fontFamily={"Manrope-Light"} fontSize="sm" color="coolGray.400">
						{" "}
						&{" "}
					</Text>

					<Link
						_text={{
							fontSize: "sm",
							fontFamily: "Manrope-Bold",
							fontWeight: "semibold",
							textDecoration: "none",
						}}
						_light={{
							_text: {
								color: "primary.900",
							},
						}}
						_dark={{
							_text: {
								color: "primary.500",
							},
						}}
						onPress={() => {
							console.log(userPrivate);
						}}
					>
						Privacy Policy
					</Link>
				</HStack>
			</Checkbox>
		</>
	);
};

export default Page4;
