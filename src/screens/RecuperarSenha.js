import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import Botao from "../components/Botao"

const RecuperarSenha = (props) => {
    const [txtEmail, setEmail] = useState('')

    const goToLogin = () => {
        props.navigation.navigate('Login')
    }

    return (
        <View style={styles.view}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput style={styles.textInput} value={txtEmail} onChangeText={setEmail} placeholder='Insira o seu e-mail' />
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

export default RecuperarSenha