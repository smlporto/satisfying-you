import { useState } from "react"
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native"
import { collection, addDoc } from 'firebase/firestore'
import { db, storage } from '../config/firebase'
import Botao from "../components/Botao"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import BotaoSecundario from "../components/BotaoSecundario"
import { uploadBytes, ref, getDownloadURL } from "firebase/storage"


const NovaPesquisa = (props) => {

    const [txtNome, setTxtNome] = useState('')
    const [txtData, setTxtData] = useState('')
    //const [txtImg, setTxtImg] = useState('')
    const [txtDataError, setDataError] = useState('')
    const [txtNomeError, setNomeError] = useState('')
    const [fotoError, setFotoError] = useState('')
    const [urlFoto, setUrlFoto] = useState('')
    const [foto, setFoto] = useState()

    const pesquisaCollection = collection(db, 'pesquisas')

    const addPesquisa = async () => {
        if (!txtNome) {
            setNomeError('Preencha o nome da pesquisa');
        } else if (!txtData || txtData.length < 10) {
            setDataError('Preencha a data')
        } else if (!foto) {
            setFotoError('Selecione uma imagem')
        } else {
            setDataError(null)
            setNomeError(null)
            setFotoError(null)

        
            const imageRef = ref(storage, 'pesquisas/' + txtNome + '.jpg')
            const file = await fetch(urlFoto)
            const blob = await file.blob()

            uploadBytes(imageRef, blob, { contentType: 'image/jpeg' }).then( (result) => {
                console.log('Imagem enviada com sucesso!')
                getDownloadURL(imageRef).then( (url) => {

                    const docPesquisa = {
                        nome: txtNome,
                        data: txtData,
                        imageUrl: url
                    }
        
                    addDoc(pesquisaCollection, docPesquisa).then( (docRef) => {
                        console.log('Pesquisa adicionada com sucesso!' + docRef.id)
                        props.navigation.navigate('Pesquisas')
                    }).catch( (error) => {
                        console.log('Erro ao adicionar pesquisa: ' + error)
                    })
                })

            }).catch( (error) => {
                console.log('Erro ao enviar imagem: ' + error)
            })
                
        }
    }

    const selecionarFoto = () => {
        launchImageLibrary().then( (result) => {
            setUrlFoto(result.assets[0].uri)
            setFoto(result.assets[0])
        }).catch( (error) => {
            console.log('Erro ao selecionar foto: ' + JSON.stringify(error))
        })
    }


    const capturarFoto = () => {
        launchCamera({
            mediaType: 'photo',
            cameraType: 'back',
            quality: 1,
        }).then( (result) => {
            setUrlFoto(result.assets[0].uri)
            setFoto(result.assets[0])
        }).catch( (error) => {
            console.log('Erro ao capturar foto: ' + JSON.stringify(error))
        })
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
            { urlFoto ? null : <TextInput style={styles.textInputImagem} value="Câmera/Galeria" editable={false} /> }
            { urlFoto ? <Image source={{ uri: urlFoto }} style={{ width: '60%', height: 94 }} /> : null }

            <BotaoSecundario text="Foto da Galeria" funcao={selecionarFoto} />
            <BotaoSecundario text="Capturar foto" funcao={capturarFoto} />

            
            {/* Exibe mensagem de erro se houver */}
            {fotoError ? <Text style={styles.errorText}>{fotoError}</Text> : null}

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
        color: 'gray',
        width: '60%',
        height: 94,
    }
})

export default NovaPesquisa;