import { useEffect, useState } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, Image } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import Botao from "../components/Botao"
import BotaoSecundario from "../components/BotaoSecundario"
import { updateDoc, doc, deleteDoc } from "firebase/firestore"
import { ref, deleteObject, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from '../config/firebase'
import { useSelector } from 'react-redux'
import { launchCamera, launchImageLibrary } from "react-native-image-picker"


const ModificarPesquisa = (props) => {
    const [txtNome, setTxtNome] = useState('Carnaval 2024')
    const [txtData, setTxtData] = useState('16/02/2024')
    const [img, setImg] = useState('')
    const [txtDataError, setDataError] = useState('')
    const [txtNomeError, setNomeError] = useState('')
    const [imgError, setImgError] = useState('')
    const [isVisible, setIsVisible] = useState(false)

    const id = useSelector(state => state.pesquisa.id)
    const nome = useSelector(state => state.pesquisa.nome)
    const data = useSelector(state => state.pesquisa.data)
    const imageUrl = useSelector(state => state.pesquisa.imageUrl)

    useEffect(() => {
        setTxtNome(nome)
        setTxtData(data)
        setImg(imageUrl)
    }, [])

    const nomeAntigo = nome


    const handleNomeChange = (text) => {
        setTxtNome(text)
        setNomeError('')
    }


    const handleDataChange = (text) => {
        setTxtData(text)
        setDataError('')

        text = text.replace(/[^0-9]/g, '')

        if (text.length > 2) {
            text = text.substring(0, 2) + '/' + text.substring(2)
        }
        if (text.length > 5) {
            text = text.substring(0, 5) + '/' + text.substring(5)
        }

        setTxtData(text);
    }


    const openModal = () => {
        setIsVisible(true);
    }


    const closeModal = () => {
        setIsVisible(false)
    }


    const saveChanges = async () => {
        if (!txtNome) {
            setNomeError('Preencha o nome da pesquisa');
        } else if (!txtData || txtData.length < 10) {
            setDataError('Preencha a data')
        } else if (!img) {
            setImgError('Preencha a imagem')
        } else {
            setDataError(null)
            setNomeError(null)
            setImgError(null)

            const cardRef = doc(db, 'pesquisas', id)

            //Apaga a imagem antiga e salva uma com o novo nome
            const imgRef = ref(storage, 'pesquisas/' + nomeAntigo + '.jpg')
            deleteObject(imgRef).then(() => {
                console.log('Imagem atualizada com sucesso!')
            }).catch((error) => {
                console.log('Erro ao apagar imagem: ' + error)
            })

            const imageRef = ref(storage, 'pesquisas/' + txtNome + '.jpg')
            const response = await fetch(img);
            const blob = await response.blob();

            uploadBytes(imageRef, blob, { contentType: 'image/jpeg' }).then((result) => {
                getDownloadURL(imageRef).then((url) => {

                    const docPesquisa = {
                        nome: txtNome,
                        data: txtData,
                        imageUrl: url,
                    }

                    updateDoc(cardRef, docPesquisa).then(() => {
                        console.log('Pesquisa alterada com sucesso!')
                        props.navigation.navigate('Pesquisas')
                    }).catch((error) => {
                        console.log('Erro ao modificar pesquisa: ' + error)
                    })
                })

            }).catch((error) => {
                console.log('Erro ao enviar imagem: ' + error)
            })
        }
    }


    const deletePesquisa = () => {
        const cardRef = doc(db, 'pesquisas', id)
        const imgRef = ref(storage, 'pesquisas/' + nomeAntigo + '.jpg')

        deleteDoc(cardRef).then(() => {
            console.log('Pesquisa apagada com sucesso!')
            props.navigation.navigate('Pesquisas')
        }).catch((error) => {
            console.log('Erro ao apagar pesquisa: ' + error)
        })

        deleteObject(imgRef).then(() => {
            console.log('Imagem apagada com sucesso!')
        }).catch((error) => {
            console.log('Erro ao apagar imagem: ' + error)
        })
    }


    const selecionarFoto = () => {
        launchImageLibrary().then((result) => {
            setImg(result.assets[0].uri)
        }).catch((error) => {
            console.log('Erro ao selecionar foto: ' + JSON.stringify(error))
        })

    }

    
    const capturarFoto = () => {
        launchCamera({
            mediaType: 'photo',
            cameraType: 'back',
            quality: 1,
        }).then((result) => {
            setImg(result.assets[0].uri)
        }).catch((error) => {
            console.log('Erro ao capturar foto: ' + JSON.stringify(error))
        })

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
                <TextInput style={styles.textInputIcon} value={txtData} onChangeText={handleDataChange} keyboardType="number-pad" maxLength={10} />
                <Icon style={styles.icon} name="calendar-month" size={30} />
            </View>

            {/* Exibe mensagem de erro se houver */}
            {txtDataError ? <Text style={styles.errorText}>{txtDataError}</Text> : null}

            {/* Exibição da imagem */}
            <Text style={styles.label}>Imagem</Text>
            {img ? (<Image source={{ uri: img }} style={{ width: '60%', height: 94 }} />) : null}

            {/* Exibe mensagem de erro se houver */}
            {imgError ? <Text style={styles.errorText}  >{imgError}</Text> : null}

            <BotaoSecundario text="Foto da Galeria" funcao={selecionarFoto} />
            <BotaoSecundario text="Capturar foto" funcao={capturarFoto} />

            {/* Seção de botões */}
            <View style={styles.flexBtn}>
                <Botao text="Salvar" funcao={saveChanges} />
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
                        <BotaoSecundario text="Sim" color="#FF8383" funcao={deletePesquisa} />
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