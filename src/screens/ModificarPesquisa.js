import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Botao from "../components/Botao";


const ModificarPesquisa = () => {
    const [txtNome, setTxtNome] = useState('')
    const [txtData, setTxtData] = useState('')
    const [txtImg, setTxtImg] = useState('')

    return (
        <View style={styles.view}>
            <Text style={styles.label}>Nome</Text>
            <TextInput style={styles.textInput} value={txtNome} onChangeText={setTxtNome} />

            <Text style={styles.label}>Data</Text>
            <TextInput style={styles.textInput} value={txtData} onChangeText={setTxtData} />

            <Text style={styles.label}>Imagem</Text>
            <TextInput style={styles2.textInput} value={txtImg} onChangeText={setTxtImg} />

            <View style={styles2.flexBtn}>
                <Botao text="Salvar" />
                <TouchableOpacity style={styles2.flexIcon}>
                    <Icon name="delete" size={40} color="#ffffff" />
                    <Text style={styles2.textDelete}>Apagar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
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

const styles2 = StyleSheet.create({
    flexBtn: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 40
    },
    flexIcon: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    textDelete: {
        fontSize: 18,
        color: '#ffffff',
    },
    textInput: {
        fontSize: 20,
        borderWidth: 1,
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        fontFamily: 'AveriaLibre-Bold',
        color: '#3F92C5',
        height: '20%',
        width: '60%'
    },
})

export default ModificarPesquisa;