import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const CartScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<Image
				source={require("../../assets/images/cart.png")}
				style={{ marginTop: 100, borderColor: "#f96163", borderWidth: 2, borderRadius: 10 }}
			/>

			<Text style={{ color: "#f96163", fontSize: 22,marginTop: 35, fontWeight: "bold" }}>
				Tela de pagamento em produção...
			</Text>
			

			<TouchableOpacity
				onPress={() => navigation.navigate("WelcomeScreen")}
				style={{
					backgroundColor: "#f96163",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Cancelar pagamento
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CartScreen;

const styles = StyleSheet.create({});
