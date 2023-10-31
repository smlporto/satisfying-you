import { useState } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import Botao from "../components/Botao"
import Icon from 'react-native-vector-icons/MaterialIcons'

const NovaPesquisa = (props) => {

    const [txtNome, setTxtNome] = useState('')
    const [txtData, setTxtData] = useState('')
    const [txtImg, setTxtImg] = useState('')
    const [txtDataError, setDataError] = useState('')
    const [txtNomeError, setNomeError] = useState('')
    const [txtImgError, setImgError] = useState('')

    const pesquisaCollection = collection(db, 'pesquisas')

    const addPesquisa = () => {
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

            const docPesquisa = {
                nome: txtNome,
                data: txtData,
                img: txtImg,
            }

            addDoc(pesquisaCollection, docPesquisa).then( (docRef) => {
                console.log('Pesquisa adicionada com sucesso!' + docRef.id)
                props.navigation.navigate('Pesquisas')
            }).catch( (error) => {
                console.log('Erro ao adicionar pesquisa: ' + error)
            })

                
        }
    }

    

    const handleNomeChange = (text) => {
        setTxtNome(text)
        setNomeError('')
    }

    const handleDataChange = (text) => {
        setTxtData(text)
        setDataError('')
        // Remove all non-numeric characters
        text = text.replace(/[^0-9]/g, '');
    
        // Add "/" at position 2 and 5
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

            <Text style={styles.label}>Imagem</Text>
            <TextInput style={styles.textInputImagem} value={txtImg} onChangeText={handleImgChange} placeholder="Câmera/Galeria de imagens" />
            {/* Exibe mensagem de erro se houver */}
            {txtImgError ? <Text style={styles.errorText}>{txtImgError}</Text> : null}

            <Botao text="Cadastrar" funcao={addPesquisa} />
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
    }
})

export default NovaPesquisa;