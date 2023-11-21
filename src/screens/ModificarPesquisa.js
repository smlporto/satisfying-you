import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import Botao from "../components/Botao";
import BotaoSecundario from "../components/BotaoSecundario";


const ModificarPesquisa = (props) => {
    const [txtNome, setTxtNome] = useState('Carnaval 2024')
    const [txtData, setTxtData] = useState('16/02/2024')
    const [txtImg, setTxtImg] = useState('')
    const [txtDataError, setDataError] = useState('')
    const [txtNomeError, setNomeError] = useState('')
    const [txtImgError, setImgError] = useState('')
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const cardData = props.route.params?.cardData
        if (cardData) {
            setTxtNome(cardData.nome || '') 
            setTxtData(cardData.data || '')
            setTxtImg(cardData.img || '')
        }
    }, [props.route.params?.cardData])

    const handleNomeChange = (text) => {
        setTxtNome(text)
        setNomeError('')
    }

    const handleDataChange = (text) => {
        setTxtData(text)
        setDataError('')

        text = text.replace(/[^0-9]/g, '');
    
        if (text.length > 2) {
          text = text.substring(0, 2) + '/' + text.substring(2);
        }
        if (text.length > 5) {
          text = text.substring(0, 5) + '/' + text.substring(5);
        }
    
        setTxtData(text);
    }

    const handleImgChange = (text) => {
        setTxtImg(text)
        setImgError('')
    }

    const openModal = () => {
        setIsVisible(true);
    }

    const closeModal = () => {
        setIsVisible(false);
    }

    const goToHome = () => {
        if (!txtNome) {
            setNomeError('Preencha o nome da pesquisa');
        } else if (!txtData || txtData.length < 10) {
            setDataError('Preencha a data')
        } else if (!txtImg) {
            setImgError('Preencha a imagem')
        } else {
            setDataError(null)
            setNomeError(null)
            setImgError(null)

            props.navigation.navigate('Home')          
        }

        
    }

    return (
        <View style={styles.view}>
            <Text style={styles.label}>Nome</Text>
            <TextInput style={styles.textInput} value={txtNome} onChangeText={handleNomeChange} />
            {/* Exibe mensagem de erro se houver */}
            {txtNomeError ? <Text style={styles.errorText}>{txtNomeError}</Text> : null}

            {/* Rótulo "Data" */}
            <Text style={styles.label}>Data</Text>
            <View style={styles.inputIcon}>
                <TextInput style={styles.textInputIcon} value={txtData} onChangeText={handleDataChange} keyboardType="number-pad" maxLength={10}/>
                <Icon style={styles.icon} name="calendar-month" size={30} />
            </View>
            {/* Exibe mensagem de erro se houver */}
            {txtDataError ? <Text style={styles.errorText}>{txtDataError}</Text> : null}

            {/* Exibição da imagem */}
            <Text style={styles.label}>Imagem</Text>
            <TextInput style={styles.textInputImagem} value={txtImg} onChangeText={handleImgChange} />
            {/* Exibe mensagem de erro se houver */}
            {txtImgError ? <Text style={styles.errorText}>{txtImgError}</Text> : null}

            {/* Seção de botões */}
            <View style={styles.flexBtn}>
                <Botao text="Salvar" funcao={goToHome} />
                <TouchableOpacity style={styles.flexIcon} onPress={openModal}>
                    <Icon name="delete" size={40} color="#ffffff" />
                    <Text style={styles.textDelete}>Apagar</Text>
                </TouchableOpacity>
            </View>

            {/* Modal de confirmação */}
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

// Estilos para a tela principal
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
    imgContainer: {
        backgroundColor: '#ffffff',
        width: '60%',
        height: 94
    },
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
    image: {
        width: '60%',
        height: 94,
        alignSelf: 'center'
    },
    container: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        width: '100%',
    },
    textInputIcon: {
        padding: 10,
        fontSize: 20,
        borderWidth: 1,
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        fontFamily: 'AveriaLibre-Regular',
        color: '#3F92C5',
        width: '90%',
    },
    inputIcon: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        width: '100%',
    },
    icon: {
        alignSelf: 'center',
        width: '10%',
        color: '#8B8B8B',
    },
    textInputImagem: {
        padding: 10,
        fontSize: 20,
        borderWidth: 1,
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        fontFamily: 'AveriaLibre-Regular',
        color: '#3F92C5',
        width: '60%',
        height: 94,
    },
    errorText: {
        fontFamily: 'AveriaLibre-Regular',
        color: 'red',
        fontSize: 16,
        marginTop: 5,
    }
})

// Estilos para o modal de confirmação
const modal = StyleSheet.create({
    modalContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B1F5C',
        padding: 20,
    },
    text: {
        fontSize: 30,
        color: '#ffffff',
        textAlign: 'center',
        fontFamily: 'AveriaLibre-Regular',
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