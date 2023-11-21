import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getDoc } from 'firebase/firestore'

const AcoesPesquisa = (props) => {

	const [cardData, setCardData] = useState(null); // Define um estado para armazenar os dados do card

	useEffect(() => {
		// Função assíncrona para buscar os dados da pesquisa
		const fetchCardData = async () => {
			try {
				const cardDocument = await getDoc(props.route.params?.cardRef) // Busca o documento usando o cardRef
				if (cardDocument.exists()) { // Verifica se o documento existe
					const data = cardDocument.data(); // Obtém os dados do documento
					setCardData(data) // Define os dados obtidos no estado cardData

					props.navigation.setOptions({
						title: data.nome // Define o título da página como o nome da pesquisa
					});
				} else {
					console.log('Documento não existe!')
				}
			} catch (error) {
				console.error('Erro ao buscar o documento:', error) // Registra no console se houver um erro ao buscar o documento
			}
		}

		fetchCardData(); // Chama a função para buscar os dados da pesquisa
	}, [props.route.params?.cardRef, props.navigation]) // Executa o useEffect quando props.route.params?.cardRef ou props.navigation mudarem

	const goToEditSearch = () => {
		props.navigation.navigate('ModificarPesquisa', {
			cardData: cardData, // Passa os dados da pesquisa
			cardId: props.route.params?.cardRef.id // Passa o id da pesquisa
		});
	};

	const goToDataCollect = () => {
		props.navigation.navigate('Coleta')
	};

	const goToReport = () => {
		props.navigation.navigate('Relatório')
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => goToEditSearch(cardData)}>
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
	container: { // Define um contêiner flexível
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#372775',
		gap: 30,
	},
	square: { // Define o estilo para os quadrados
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