import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";

const Card = ( props ) => {

    const text = props.text
    const data = props.data
    const imgUri = props.imgUri

    return (
        <View style={styles.square}>
            <TouchableOpacity style={styles.card} onPress={props.funcao}>
                {/* <Image style={styles.imagem} source={{ uri: imgUri }} /> */}
                <Text style={styles.imgUri}>{imgUri}</Text>
                <Text style={styles.nomePesquisa}>{text}</Text>
                <Text style={styles.data}>{data}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    square: {
        marginTop: 30,
        width: 160,
        height: 140,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginRight: 15,
    },
    card: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    nomePesquisa: {
        fontSize: 16,
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Regular',
        marginTop: 10,
    },
    data: {
        fontSize: 10,
        color: 'grey',
        fontFamily: 'AveriaLibre-Regular',
    },
    imagem: {
        width: '70%',
        height: '70%',
    }
})

export default Card;