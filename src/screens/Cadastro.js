import { View, Text, StyleSheet, TextInput } from "react-native"
import { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth_mod } from "../config/firebase"
import Botao from '../components/Botao'

const Cadastro = (props) => {

    const [txtEmail, setEmail] = useState('')
    const [txtSenha, setSenha] = useState('')
    const [txtRepetirSenha, setRepetirSenha] = useState('')
	const [txtEmailError, setEmailError] = useState('')
	const [txtSenhaError, setSenhaError] = useState('')

	const isEmailValid = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

    const cadastrarUsuario = () => {
		if (!txtEmail || !isEmailValid(txtEmail)) {
			setEmailError('E-mail parece ser inválido')
		} else if (!txtSenha || txtSenha !== txtRepetirSenha) {
			setSenhaError('O campo repetir senha difere da senha')
		} else {
			setEmailError(null)
			setSenhaError(null)
			createUserWithEmailAndPassword(auth_mod, txtEmail, txtSenha)
				.then((userCredential) => {
					console.log("Usuário cadastrado com sucesso: " + JSON.stringify(userCredential))
					props.navigation.navigate('Login')
				})
				.catch((error) => {
					console.log("Erro ao cadastrar usuário: " + JSON.stringify(error))
					setSenhaError('Algo deu errado. Tente novamente!')
				})
		}
	}

	const handleSenhaChange = (text) => {
		setSenha(text)
		setSenhaError('')
	}

	const handleRepetirSenhaChange = (text) => {
		setRepetirSenha(text)
		setSenhaError('')
	}

	const handleEmailChange = (text) => {
		setEmail(text)
		setEmailError('')
	}

    return (
        <View style={styles.view}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput style={styles.textInput} value={txtEmail} onChangeText={handleEmailChange} placeholder='Insira o seu e-mail' />
			 {/* Renderiza uma mensagem de erro se houver um erro de e-mail */}
			{txtEmailError ? <Text style={styles.errorText}>{txtEmailError}</Text> : null}

            <Text style={styles.label}>Senha</Text>
            <TextInput style={styles.textInput} value={txtSenha} onChangeText={handleSenhaChange} placeholder='Insira a sua senha' secureTextEntry />
            <Text style={styles.label}>Repetir senha</Text>
            
			<TextInput style={styles.textInput} value={txtRepetirSenha} onChangeText={handleRepetirSenhaChange} placeholder='Repita a sua senha' secureTextEntry />
			{/* Renderiza uma mensagem de erro se houver um erro de senha */}
			{txtSenhaError ? <Text style={styles.errorText}>{txtSenhaError}</Text> : null}
            
			<Botao text="CADASTRAR" funcao={cadastrarUsuario}/>
        </View>
    )
}

const styles = StyleSheet.create({
    view: { // Define o estilo para o componente View
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#372775',
		padding: 20,
	},
	label: { // Define o estilo para os rótulos de texto
		fontSize: 24,
		marginTop: 10,
		color: '#ffffff',
		fontFamily: 'AveriaLibre-Regular',
	},
	textInput: { // Define o estilo para os campos de entrada de texto
		fontSize: 20,
		borderWidth: 1,
		backgroundColor: '#ffffff',
		borderColor: '#ffffff',
		fontFamily: 'AveriaLibre-Regular',
		color: '#3F92C5',
	},
	errorText: { // Define o estilo para as mensagens de erro
		fontFamily: 'AveriaLibre-Regular',
		color: 'red',
		fontSize: 16,
		marginTop: 5,
	}
})

export default Cadastro
