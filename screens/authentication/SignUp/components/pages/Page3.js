import React from "react";

const Page3 = () => {
	return (
		<>
			<FloatingLabelInput
				isRequired
				label="Username"
				labelColor="#9ca3af"
				labelBGColor={useColorModeValue("#fff", "#1f2937")}
				borderRadius="4"
				defaultValue={preferredUsername}
				onChangeText={(txt) => setPreferredUsername(txt)}
				_text={{
					fontSize: "sm",
					fontWeight: "medium",
				}}
				_dark={{
					borderColor: "coolGray.700",
				}}
				_light={{
					borderColor: "coolGray.300",
				}}
			/>
			<FloatingLabelInput
				isRequired
				type={showPass ? "" : "password"}
				label="Password"
				borderRadius="4"
				labelColor="#9ca3af"
				labelBGColor={useColorModeValue("#fff", "#1f2937")}
				defaultValue={password}
				onChangeText={(txt) => setPassword(txt)}
				InputRightElement={
					<IconButton
						variant="unstyled"
						icon={
							<Icon
								size="4"
								color="coolGray.400"
								as={Entypo}
								name={showPass ? "eye-with-line" : "eye"}
							/>
						}
						onPress={() => {
							setShowPass(!showPass);
						}}
					/>
				}
				_text={{
					fontSize: "sm",
					fontWeight: "medium",
				}}
				_dark={{
					borderColor: "coolGray.700",
				}}
				_light={{
					borderColor: "coolGray.300",
				}}
			/>
			<FloatingLabelInput
				isRequired
				type={showConfirmPass ? "" : "password"}
				label="Confirm Password"
				borderRadius="4"
				labelColor="#9ca3af"
				labelBGColor={useColorModeValue("#fff", "#1f2937")}
				defaultValue={confirm_pass}
				onChangeText={(txt) => setConfirmPass(txt)}
				InputRightElement={
					<IconButton
						variant="unstyled"
						icon={
							<Icon
								size="4"
								color="coolGray.400"
								as={Entypo}
								name={showConfirmPass ? "eye-with-line" : "eye"}
							/>
						}
						onPress={() => {
							setShowConfirmPass(!showConfirmPass);
						}}
					/>
				}
				_text={{
					fontSize: "sm",
					fontWeight: "medium",
				}}
				_dark={{
					borderColor: "coolGray.700",
				}}
				_light={{
					borderColor: "coolGray.300",
				}}
			/>
		</>
	);
};

export default Page3;
