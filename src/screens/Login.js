//Import
import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper'
import { useState } from 'react'
import Botao from '../components/Botao'


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

    const goToCriarConta = () => {
        props.navigation.navigate('Home')
    }


    return (
        <PaperProvider theme={theme}>
            <View style={styles.view}>
                <View style={styles.title} >
                    <Text style={styles.titleText}>Satisfying.you</Text>
                    <Icon style={styles.icon} name="sentiment-satisfied-alt" size={40} color="#ffffff" />
                </View>
                <Text style={styles.label}>E-mail</Text>
                <TextInput style={styles.textInput} value={txtEmail} onChangeText={setEmail} placeholder='Insira seu e-mail'/>
                <Text style={styles.label}>Senha</Text>
                <TextInput style={styles.textInput} value={txtSenha} onChangeText={setSenha} placeholder='Insira sua senha'/>
                <Botao text="Entrar" funcao={goToCriarConta} />
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
		marginTop: 20,
		color: '#ffffff',
		fontFamily: 'AveriaLibre-Bold',
	},
    textInput: {
		fontSize: 20,
		borderWidth: 1,
		backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        fontFamily: 'AveriaLibre-Bold',
	},
})


//Export
export default Login
