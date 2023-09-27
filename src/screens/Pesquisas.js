import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
//import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'
import Botao from "../components/Botao";
import Card from "../components/Card";

const Pesquisas = (props) => {

    const goToNovaPesquisa = () => {
		props.navigation.navigate('NovaPesquisa')
	}

    return (
        <View style={styles.view}>
            <View style={styles.container}>
                <Icon style={styles.icon} name="search" size={20} color="#ffffff" />
                <TextInput style={styles.textInput} placeholder='Insira o termo de busca...' />
            </View>
            <View style={{height: 180}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Card text='Pesquisa 1' data='25/09/2023'/>
                    <Card text='Pesquisa 2' data='09/10/2023'/>
                    <Card text='Pesquisa 3' data='25/11/2023'/>
                    <Card text='Pesquisa 4' data='02/12/2023'/>
                </ScrollView>
            </View>
            <Botao text='NOVA PESQUISA' funcao={goToNovaPesquisa}/>

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
