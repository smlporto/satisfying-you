import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Botao from "../components/Botao";
import BotaoSecundario from "../components/BotaoSecundario";


const ModificarPesquisa = (props) => {
    const [txtNome, setTxtNome] = useState('')
    const [txtData, setTxtData] = useState('')
    const [txtImg, setTxtImg] = useState('')
    const [isVisible, setIsVisible] = useState(false)

    const openModal = () => {
        setIsVisible(true);
    }

    const closeModal = () => {
        setIsVisible(false);
    }

    const goToHome = () => {
        props.navigation.navigate('Home')
    }

    return (
        <View style={styles.view}>
            <Text style={styles.label}>Nome</Text>
            <TextInput style={styles.textInput} value={txtNome} onChangeText={setTxtNome} />

            <Text style={styles.label}>Data</Text>
            <View style={styles2.container}>
                <TextInput style={styles.textInput} value={txtData} onChangeText={setTxtData} />
                <Icon style={styles2.icon} name="delete" size={40} color="#ffffff" />
            </View>

            <Text style={styles.label}>Imagem</Text>
            <TextInput style={styles2.textInput} value={txtImg} onChangeText={setTxtImg} />

            <View style={styles2.flexBtn}>
                <Botao text="Salvar" />
                <TouchableOpacity style={styles2.flexIcon} onPress={openModal}>
                    <Icon name="delete" size={40} color="#ffffff" />
                    <Text style={styles2.textDelete}>Apagar</Text>
                </TouchableOpacity>
            </View>

            <Modal visible={isVisible} animationType="slide">
                <View style={modal.modalContent}>
                    <Text style={modal.text}>Tem certeza de apagar essa pesquisa?</Text>
                    <View style={modal.flexBtn}>
                        <BotaoSecundario text="Sim" color="#FF8383" funcao={goToHome} />
                        <BotaoSecundario text="Cancelar" color="#3F92C5" funcao={closeModal} />
                    </View>
                </View>
            </Modal>
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
    // textInput: {
    //     fontSize: 20,
    //     borderWidth: 1,
    //     backgroundColor: '#ffffff',
    //     borderColor: '#ffffff',
    //     fontFamily: 'AveriaLibre-Bold',
    //     color: '#3F92C5',
    //     height: '20%',
    //     width: '60%'
    // },
    textInput: {
        fontSize: 16,
        borderWidth: 1,
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        fontFamily: 'AveriaLibre-Regular',
        color: '#3F92C5',
        padding: 3,
        width: '90vw',
    },
    container: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        width: '100%',
    },
    icon: {
        marginLeft: 10,
        alignSelf: 'center',
        width: '10%',
        color: '#8B8B8B',
    },
})

const modal = StyleSheet.create({
    modalContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#372775',
        padding: 20,
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        textAlign: 'center',
    },
    flexBtn: {
        flexDirection: 'row',
        gap: 20,
        width: 200,
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
    }
})

export default ModificarPesquisa;