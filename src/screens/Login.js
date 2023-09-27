//Import
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper'
import { useState } from 'react'
import Botao from '../components/Botao'
import BotaoSecundario from '../components/BotaoSecundario'


const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#372775',
		secondary: '#ffffff',
	}
}

//Define
const Login = (props) => {

	const [txtEmail, setEmail] = useState('')
	const [txtSenha, setSenha] = useState('')
	const [txtError, setError] = useState('')

	const isEmailValid = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

	const goToHome = () => {
		if (txtEmail && txtSenha && isEmailValid(txtEmail)) {
			props.navigation.navigate('Home')
		} else {
			setError('E-mail e/ou senha inválidos.')
		}
	}

	const handleEmailChange = (text) => {
		setEmail(text)
		setError('')
	}

	const handleSenhaChange = (text) => {
		setSenha(text)
		setError('')
	}

	const goToCadastro = () => {
		props.navigation.navigate('Cadastro')
	}

	const goToRecuperar = () => {
		props.navigation.navigate('RecuperarSenha')
	}

	return (
		<PaperProvider theme={theme}>
			<View style={styles.view}>
				<View style={styles.title} >
					<Text style={styles.titleText}>Satisfying.you</Text>
					<Icon style={styles.icon} name="sentiment-satisfied-alt" size={40} color="#ffffff" />
				</View>
				<View style={styles.section}>
					<Text style={styles.label}>E-mail</Text>
					<TextInput
						style={styles.textInput}
						value={txtEmail}
						onChangeText={handleEmailChange}
						placeholder="Insira o seu e-mail"
					/>
					<Text style={styles.label}>Senha</Text>
					<TextInput
						style={styles.textInput}
						value={txtSenha}
						onChangeText={handleSenhaChange}
						placeholder="Insira a sua senha"
						secureTextEntry
					/>
					{txtError ? <Text style={styles.errorText}>{txtError}</Text> : null}
					<Botao text="Entrar" funcao={goToHome} />
				</View>
				<View style={styles.section}>
					<BotaoSecundario text="Criar minha conta" funcao={goToCadastro} />
					<BotaoSecundario text="Esqueci minha senha" color='#B0CCDE' funcao={goToRecuperar} />
				</View>
			</View>
		</PaperProvider>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#372775',
		padding: 20,
	},
	title: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleText: {
		fontSize: 36,
		color: '#ffffff',
		fontFamily: 'AveriaLibre-Regular',
	},
	icon: {
		marginLeft: 15,
	},
	label: {
		fontSize: 24,
		marginTop: 10,
		color: '#ffffff',
		fontFamily: 'AveriaLibre-Regular',
	},
	textInput: {
		fontSize: 20,
		borderWidth: 1,
		backgroundColor: '#ffffff',
		borderColor: '#ffffff',
		fontFamily: 'AveriaLibre-Regular',
		color: '#3F92C5',
	},
	section: {
		marginTop: 40,
	},
	errorText: {
		fontFamily: 'AveriaLibre-Regular',
		color: 'red',
		fontSize: 16,
		marginTop: 5,
	}
})


export default Login
