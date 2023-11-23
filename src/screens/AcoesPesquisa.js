import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux'

const AcoesPesquisa = (props) => {

	const nome = useSelector(state => state.pesquisa.nome)

	// Define o título da página como o nome da pesquisa
	useEffect(() => {
		props.navigation.setOptions({
			title: nome 
		})
	}, [nome, props.navigation])


	const goToEditSearch = () => {
		props.navigation.navigate('ModificarPesquisa')
	}


	const goToDataCollect = () => {
		props.navigation.navigate('Coleta')
	}


	const goToReport = () => {
		props.navigation.navigate('Relatório')
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={goToEditSearch}>
				<View style={styles.square}>
					<Icon name="file-document-edit-outline" size={80} color="#fff" />
					<Text style={styles.text}>Modificar</Text>
				</View>
			</TouchableOpacity>

			<TouchableOpacity onPress={goToDataCollect}>
				<View style={styles.square}>
					<Icon name="checkbox-multiple-marked-outline" size={80} color="#fff" />
					<Text style={styles.text}>Coleta de dados</Text>
				</View>
			</TouchableOpacity>

			<TouchableOpacity onPress={goToReport}>
				<View style={styles.square}>
					<Icon name="chart-donut" size={80} color="#fff" />
					<Text style={styles.text}>Relatório</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#372775',
		gap: 30,
	},
	square: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
		width: 200,
		backgroundColor: '#312464',
		borderRadius: 10,
	},
	text: {
		marginTop: 10,
		fontSize: 16,
		color: 'white',
		fontFamily: 'AveriaLibre-Regular',
	},
});

export default AcoesPesquisa