import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<Image
				source={require("../../assets/images/welcome2.png")}
				style={{ marginTop: 100, borderColor: "#f96163", borderWidth: 2, borderRadius: 10 }}
			/>

			<Text style={{ color: "#f96163", fontSize: 22,marginTop: 75, fontWeight: "bold" }}>
				Os melhores produtos artesanais
			</Text>
			<Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
			    de Floripa
			</Text>
			<Text
				style={{
					fontSize: 20,
					fontWeight: "bold",
					color: "#3c444c",
					marginTop: 44,
					marginBottom: 40,
				}}
			>
				Clique abaixo e descubra...
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("RecipeList")}
				style={{
					backgroundColor: "#f96163",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Entrar
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
