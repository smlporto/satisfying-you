import { TouchableOpacity, Text, StyleSheet} from "react-native";

const Botao = ( props ) => {

    const text = props.text

    return (
        <TouchableOpacity style={styles.fundoBotao} onPress={props.funcao}>
            <Text style={styles.textoBotao}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textoBotao: {
        fontSize: 24,  
        color: 'white',
        textAlign: 'center',
        fontFamily: 'AveriaLibre-Regular',
        textTransform: 'uppercase'
    },
    fundoBotao: {
        backgroundColor: '#37BD6D',
        padding: 10,
        width: '100%',
        marginTop: 30,
    }
})

export default Botao;