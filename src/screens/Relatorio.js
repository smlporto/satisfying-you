import { Image, StyleSheet, Text, View } from "react-native";

const Relatorio = () => {
    return (
        <View style={styles.view}>
            <Image style={styles.imagem} source={require('../../assets/img/grafico.png')}/>
            <View style={styles.containerList}>
                <View style={styles.data}>
                    <View style={styles.square1}/>
                    <Text style={styles.opinionList}>Excelente</Text>
                </View>
                <View style={styles.data}>
                    <View style={styles.square2}/>
                    <Text style={styles.opinionList}>Bom</Text>
                </View>
                <View style={styles.data}>
                    <View style={styles.square3}/>
                    <Text style={styles.opinionList}>Neutro</Text>
                </View>
                <View style={styles.data}>
                    <View style={styles.square4}/>
                    <Text style={styles.opinionList}>Ruim</Text>
                </View>
                <View style={styles.data}>
                    <View style={styles.square5}/>
                    <Text style={styles.opinionList}>Péssimo</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#372775',
        padding: 20,
    },
    imagem: {
        width: 300,
        height: 300
    },
    containerList: {
        paddingTop: 54
    },
    opinionList: {
        fontSize: 36,
        color: '#ffffff',
        fontFamily: 'AveriaLibre-Regular',
    },
    square1: {
        width: 30,
        height: 30,
        backgroundColor: '#F1CE7E',
        marginRight: 15,
    },
    square2: {
        width: 30,
        height: 30,
        backgroundColor: '#6994FE',
        marginRight: 15,
    },
    square3: {
        width: 30,
        height: 30,
        backgroundColor: '#5FCDA4',
        marginRight: 15,
    },
    square4: {
        width: 30,
        height: 30,
        backgroundColor: '#EA7288',
        marginRight: 15,
    },
    square5: {
        width: 30,
        height: 30,
        backgroundColor: '#53D8D8',
        marginRight: 15,
    },
    data: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export default Relatorio;