import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from 'react'
import Botao from '../components/Botao'

const Cadastro = (props) => {

    const [txtEmail, setEmail] = useState('')
    const [txtSenha, setSenha] = useState('')
    const [txtRepetirSenha, setRepetirSenha] = useState('')

    const goToLogin = () => {
		props.navigation.navigate('Login')
	}

    return (
        <View style={styles.view}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput style={styles.textInput} value={txtEmail} onChangeText={setEmail} placeholder='Insira o seu e-mail' />
            <Text style={styles.label}>Senha</Text>
            <TextInput style={styles.textInput} value={txtSenha} onChangeText={setSenha} placeholder='Insira a sua senha' secureTextEntry />
            <Text style={styles.label}>Repetir senha</Text>
            <TextInput style={styles.textInput} value={txtRepetirSenha} onChangeText={setRepetirSenha} placeholder='Repita a sua senha' secureTextEntry />
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
		fontFamily: 'AveriaLibre-Bold',
	},
	textInput: {
		fontSize: 20,
		borderWidth: 1,
		backgroundColor: '#ffffff',
		borderColor: '#ffffff',
		fontFamily: 'AveriaLibre-Bold',
		color: '#3F92C5',
	},
})


export default Cadastro
