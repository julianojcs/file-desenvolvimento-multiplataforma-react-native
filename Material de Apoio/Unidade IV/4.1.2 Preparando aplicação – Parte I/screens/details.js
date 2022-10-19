import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native'

import Axios from 'axios';

const Details = () => {

	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [id, setId] = useState('');

	const route = useRoute();
	const navigation = useNavigation();

	useEffect(() => {

		const user = route.params.user;
		setName(user.name);
		setLocation(user.location);
		setId(user.id);

	}, [])

	const editUser = () => {
		Axios.patch('http://10.0.2.2:3000/users/' + id, {
			name,
			location
		}).then((res) => {
			alert("Usuario editado");
			navigation.navigate("Home", { res });
		}).catch((err) => alert('erro'))
	}


	return (
		<View>
			<TextInput value={name} onChangeText={(txt) => setName(txt)} style={styles.input} placeholder="Nome do Usuário" />
			<TextInput value={location} onChangeText={(txt) => setLocation(txt)} style={styles.input} placeholder="Localidade" />
			<TouchableOpacity style={styles.button} onPress={editUser}>
				<Text style={styles.txtButton}>Salvar</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({

	container: {
		padding: 10
	},

	text: {
		fontSize: 18,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	input: {
		borderWidth: 1,
		borderColor: '#545454',
		marginVertical: 10,
		padding: 5,
		height: 45,
		fontSize: 16
	},
	button: {
		alignItems: 'center',
		justifyContent: "center"
	},
	txtButton: {
		fontSize: 16,
		fontWeight: '600'
	}
})

export default Details;