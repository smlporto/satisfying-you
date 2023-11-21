import { View, Text, StyleSheet, TextInput, ScrollView, FlatList } from "react-native"
import { collection, onSnapshot, query, orderBy, doc } from 'firebase/firestore'
import { useEffect, useState } from "react"
import { db } from '../config/firebase'
import Icon from 'react-native-vector-icons/FontAwesome'
import Botao from "../components/Botao"
import Card from "../components/Card"

const Pesquisas = (props) => {

    const [listaPesquisas, setListaPesquisas] = useState()

    const pesquisaCollection = collection(db, 'pesquisas')

    useEffect(() => {
        const q = query(pesquisaCollection, orderBy('data', 'asc'))

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const pesquisas = []
            snapshot.forEach((doc) => {
                pesquisas.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setListaPesquisas(pesquisas)
        })
    }, [])

    const itemPesquisa = ({ item }) => {
        return (
            <Card text={item.nome} data={item.data} imgUri={item.img} funcao={() => goToAcoesPesquisa(item.id)}/>
        )
    }

    const goToNovaPesquisa = () => {
        props.navigation.navigate('NovaPesquisa')
    }

    const goToAcoesPesquisa = (id) => {
        const cardRef = doc(db, 'pesquisas', id)
        props.navigation.navigate('AcoesPesquisa', { cardRef })
    }

    return (
        <View style={styles.view}>
            {/* Container para a barra de pesquisa */}
            <View style={styles.container}>
                <Icon style={styles.icon} name="search" size={20} color="#ffffff" />
                <TextInput style={styles.textInput} placeholder='Insira o termo de busca...' />
            </View>

            {/* Área de exibição de cards com rolagem horizontal */}
            <View style={{ height: 180 }}>
                <FlatList
                    horizontal={true}
                    data={listaPesquisas}
                    renderItem={itemPesquisa}
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <Botao text='NOVA PESQUISA' funcao={goToNovaPesquisa} />
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
    textInput: {
        fontSize: 16,
        borderWidth: 1,
        backgroundColor: '#ffffff',
        borderColor: '#ffffff',
        fontFamily: 'AveriaLibre-Regular',
        color: '#3F92C5',
        padding: 3,
        width: '90%',
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

export default Pesquisas
