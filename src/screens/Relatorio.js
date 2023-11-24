import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PieChart from 'react-native-pie-chart'

const Relatorio = () => {
    
    const widthAndHeight = 300
    const series = [5, 5, 5, 5, 5]
    const sliceColor = ['#FF0000', '#FF5733', '#FFC300', '#33FF57', '#00FF00']

    return (
        <View style={styles.view}>

            {/* Pie Chart */}
            <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
            />

            <View style={styles.containerList}>

                <View style={styles.containerItem}>
                    <View style={styles.square1} />
                    <Text style={styles.textoLegenda}>Pessimo</Text>
                </View>

                <View style={styles.containerItem}>
                    <View style={styles.square2} />
                    <Text style={styles.textoLegenda}>Ruim</Text>
                </View>

                <View style={styles.containerItem}>
                    <View style={styles.square3} />
                    <Text style={styles.textoLegenda}>Neutro</Text>
                </View>

                <View style={styles.containerItem}>
                    <View style={styles.square4} />
                    <Text style={styles.textoLegenda}>Bom</Text>
                </View>

                <View style={styles.containerItem}>
                    <View style={styles.square5} />
                    <Text style={styles.textoLegenda}>Excelente</Text>
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#372775',
        padding: 20,
    },
    textoLegenda: {
        fontSize: 24,
        color: '#ffffff',
        fontFamily: 'AveriaLibre-Regular',
    },
    containerItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    square1: {
        width: 20,
        height: 20,
        backgroundColor: '#FF0000',
        marginRight: 15,
    },
    square2: {
        width: 20,
        height: 20,
        backgroundColor: '#FF5733',
        marginRight: 15,
    },
    square3: {
        width: 20,
        height: 20,
        backgroundColor: '#FFC300',
        marginRight: 15,
    },
    square4: {
        width: 20,
        height: 20,
        backgroundColor: '#33FF57',
        marginRight: 15,
    },
    square5: {
        width: 20,
        height: 20,
        backgroundColor: '#00FF00',
        marginRight: 15,
    },
    containerList: {
        marginTop: 20,
    },
});

export default Relatorio;