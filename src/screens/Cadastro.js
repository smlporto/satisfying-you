import { View, Text, StyleSheet, TextInput } from "react-native"
import { useState } from 'react'
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

    const goToLogin = () => {
		if (!txtEmail || !isEmailValid(txtEmail)) {
			setEmailError('E-mail parece ser inválido')
		} else if (!txtSenha || txtSenha !== txtRepetirSenha) {
			setSenhaError('O campo repetir senha difere da senha')
		} else {
			setEmailError(null)
			setSenhaError(null)
			props.navigation.navigate('Login')
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
			{txtEmailError ? <Text style={styles.errorText}>{txtEmailError}</Text> : null}

            <Text style={styles.label}>Senha</Text>
            <TextInput style={styles.textInput} value={txtSenha} onChangeText={handleSenhaChange} placeholder='Insira a sua senha' secureTextEntry />
            <Text style={styles.label}>Repetir senha</Text>
            <TextInput style={styles.textInput} value={txtRepetirSenha} onChangeText={handleRepetirSenhaChange} placeholder='Repita a sua senha' secureTextEntry />
			{txtSenhaError ? <Text style={styles.errorText}>{txtSenhaError}</Text> : null}
            <Botao text="CADASTRAR" funcao={goToLogin} />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#372775',
		padding: 20,
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
	errorText: {
		fontFamily: 'AveriaLibre-Regular',
		color: 'red',
		fontSize: 16,
		marginTop: 5,
	}
})


export default Cadastro
