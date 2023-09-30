import { Image, StyleSheet, Text, View } from "react-native";

const Relatorio = () => {
    return (
        <View style={styles.view}>
            <Image style={styles.imagem} source={{ uri: 'https://w7.pngwing.com/pngs/743/758/png-transparent-pie-chart-circle-angle-sugar-others-angle-orange-logo.png' }} />
            <View style={styles.containerList}>
                <Text style={styles.opinionList}>Excelente</Text>
                <Text style={styles.opinionList}>Bom</Text>
                <Text style={styles.opinionList}>Neutro</Text>
                <Text style={styles.opinionList}>Ruim</Text>
                <Text style={styles.opinionList}>Péssimo</Text>
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
    }
})

export default Relatorio;