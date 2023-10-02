import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import Botao from "../components/Botao";
import Card from "../components/Card";

const Pesquisas = (props) => {

    const goToNovaPesquisa = () => {
		props.navigation.navigate('NovaPesquisa')
	}

    const goToAcoesPesquisa = () => {
		props.navigation.navigate('AcoesPesquisa')
	}

    return (
        <View style={styles.view}>
            {/* Container para a barra de pesquisa */}
            <View style={styles.container}>
                <Icon style={styles.icon} name="search" size={20} color="#ffffff" />
                <TextInput style={styles.textInput} placeholder='Insira o termo de busca...' />
            </View>

            {/* Área de exibição de cards com rolagem horizontal */}
            <View style={{height: 180}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Card text='CARNAVAL 2024' data='03/03/2024' imgUri='https://cdn-icons-png.flaticon.com/512/737/737475.png' funcao={goToAcoesPesquisa}/>
                    <Card text='SECOMP 2023' data='10/10/2023' imgUri='https://cdn-icons-png.flaticon.com/512/3879/3879707.png' funcao={goToAcoesPesquisa} />
                    <Card text='UBUNTU 2022' data='25/11/2023' imgUri='https://cdn-icons-png.flaticon.com/512/3127/3127995.png' funcao={goToAcoesPesquisa} />
                    <Card text='MENINAS CPU' data='02/12/2023' imgUri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQL1Y8AxcFJvBAXbtFQIuEIvrMcl2KTpqDg&usqp=CAU' funcao={goToAcoesPesquisa} />
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
