import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth_mod } from '../firebase/config'
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
			signInWithEmailAndPassword(auth_mod, txtEmail, txtSenha)
				.then((userLogged) => {
					console.log('Usuário logado com sucesso: ' + JSON.stringify(userLogged))
					props.navigation.navigate('Home')
				})
				.catch((error) => {
					console.log('Erro ao logar usuário: ' + JSON.stringify(error))
					setError('Algo deu errado. Tente novamente!')
				})
			
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
		// O componente PaperProvider envolve o conteúdo com o tema (theme) especificado
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
	view: { // Estilo para o componente de visualização principal
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#372775',
		padding: 20,
	},
	title: { // Estilo para a seção do título e ícone
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleText: { // Estilo para o texto do título
		fontSize: 36,
		color: '#ffffff',
		fontFamily: 'AveriaLibre-Regular',
	},
	icon: { // Estilo para o ícone
		marginLeft: 15,
	},
	label: { // Estilo para os rótulos
		fontSize: 24,
		marginTop: 10,
		color: '#ffffff',
		fontFamily: 'AveriaLibre-Regular',
	},
	textInput: { // Estilo para os campos de entrada de texto
		fontSize: 20,
		borderWidth: 1,
		backgroundColor: '#ffffff',
		borderColor: '#ffffff',
		fontFamily: 'AveriaLibre-Regular',
		color: '#3F92C5',
	},
	section: { // Estilo para as seções
		marginTop: 40,
	},
	errorText: { // Estilo para a mensagem de erro
		fontFamily: 'AveriaLibre-Regular',
		color: 'red',
		fontSize: 16,
		marginTop: 5,
	}
})

export default Login
