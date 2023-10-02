import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import Botao from "../components/Botao"

const RecuperarSenha = (props) => {

    const [txtEmail, setEmail] = useState('')
    const [txtError, setError] = useState('')

    const isEmailValid = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

    const goToLogin = () => {
        if (txtEmail && isEmailValid(txtEmail)) {
			props.navigation.navigate('Login')
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
            <Botao text="Recuperar" funcao={goToLogin} />
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