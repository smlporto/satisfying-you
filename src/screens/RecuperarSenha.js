import { View, Text, StyleSheet, TextInput } from "react-native"
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth"
import { auth_mod } from "../config/firebase"
import Botao from "../components/Botao"

const RecuperarSenha = (props) => {

    const [txtEmail, setEmail] = useState('')
    const [txtError, setError] = useState('')

    const isEmailValid = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

    const recuperarSenha = () => {
        if (txtEmail && isEmailValid(txtEmail)) {
			sendPasswordResetEmail(auth_mod, txtEmail)
                .then(() => {
                    console.log('E-mail de recuperação enviado com sucesso!')
                    props.navigation.navigate('Login')
                })
		} else {
			setError('E-mail parece ser inválido')
		}
    }

    const handleEmailChange = (text) => {
		setEmail(text)
		setError('')
	}

    return (
        <View style={styles.view}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput style={styles.textInput} value={txtEmail} onChangeText={handleEmailChange} placeholder='Insira o seu e-mail' />
            
            {/* Exibe mensagem de erro se houver */}
            {txtError ? <Text style={styles.errorText}>{txtError}</Text> : null}

            {/* Componente fabricado*/}
            <Botao text="Recuperar" funcao={recuperarSenha} />
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

export default RecuperarSenha