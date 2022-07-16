import React from "react";

const Page2 = () => {
	return (
		<>
			<FloatingLabelInput
				isRequired
				label="Name"
				labelColor="#9ca3af"
				labelBGColor={useColorModeValue("#fff", "#1f2937")}
				borderRadius="4"
				defaultValue={name}
				onChangeText={(txt) => setName(txt)}
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
				label="Email"
				labelColor="#9ca3af"
				labelBGColor={useColorModeValue("#fff", "#1f2937")}
				borderRadius="4"
				defaultValue={email}
				onChangeText={(txt) => setEmail(txt)}
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

export default Page2;
