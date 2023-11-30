
import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	TextInput,
	Pressable,
	Dimensions,
	ScrollView,
	TouchableOpacity
} from "react-native";
import React from "react";
import { useMeuContexto } from '../../../contexto';
import { useState } from 'react';
import api from '../../services/api';

const [nome, setNome] = useState('');
const [telefone, setTelefone] = useState('');
const [endereco, setEndereco] = useState('');
const [quantidade, setQuantidade] = useState('');






const LastScreen = ({ navigation }) => {
	const { pedido, setPedidoAtual } = useMeuContexto();
	function SendDatabase() {
		const pedidoCadastrar = {
			nome: nome,
			telefone: telefone,
			endereco: endereco,
			quantidade: quantidade,
		}
		setPedidoAtual(pedido.concat(pedidoCadastrar))
		api.post('users', {
			nome: nome,
			telefone: telefone,
			endereco: endereco,
			quantidade: quantidade,
		}).then(() => {
			navigation.navigate('Cart')
		}).catch((error) => {
			navigation.navigate('Welcome')
		})
	}
	return (
		<View style={{ flex: 1, alignItems: "center" }}>


			<Text style={{ color: "#f96163", fontSize: 25, marginTop: 75, fontWeight: "bold" }}>
				Nome:
			</Text>
			<TextInput value={nome} onChangeText={setNome} style={{ backgroundColor: "white", fontSize: 20, width: 300, height: 50, margin: 15, borderRadius: 11, borderWidth: 0.5, borderColor: "black", paddingLeft: 10 }}>

			</TextInput>
			<Text style={{ color: "#f96163", fontSize: 25, marginTop: 10, fontWeight: "bold" }}>
				Telefone:
			</Text>
			<TextInput value={telefone} onChangeText={setTelefone} style={{ backgroundColor: "white", fontSize: 20, width: 300, height: 50, margin: 15, borderRadius: 11, borderWidth: 0.5, borderColor: "black", paddingLeft: 10 }}>

			</TextInput>
			<Text style={{ color: "#f96163", fontSize: 25, marginTop: 10, fontWeight: "bold" }}>
				Endereço de entrega:
			</Text>
			<TextInput value={endereco} onChangeText={setEndereco} style={{ backgroundColor: "white", fontSize: 20, width: 300, height: 50, margin: 15, borderRadius: 11, borderWidth: 0.5, borderColor: "black", paddingLeft: 10 }}>

			</TextInput>
			<Text style={{ color: "#f96163", fontSize: 25, marginTop: 10, fontWeight: "bold" }}>
				Quantidade:
			</Text>
			<TextInput value={quantidade} onChangeText={setQuantidade} style={{ backgroundColor: "white", fontSize: 20, width: 300, height: 50, margin: 15, borderRadius: 11, borderWidth: 0.5, borderColor: "black", paddingLeft: 10 }}>

			</TextInput>
			<TouchableOpacity
				onPress={SendDatabase}
				style={{
					backgroundColor: "#f96163",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
					marginTop: 50
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Confirmar pedido
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default LastScreen;

const styles = StyleSheet.create({});
