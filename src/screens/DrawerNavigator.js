import { View, Text, StyleSheet } from "react-native"
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"

const DrawerNavigator = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <Text style={styles.drawerEmail}>jurandir.pereira@hotmail.com</Text>
            </View>
            <View style={styles.line} />
            <DrawerItemList {...props} />
            <DrawerItem
                labelStyle={{ color: '#ffffff', fontFamily: 'AveriaLibre-Regular' }}
                label="Ações de Pesquisa"
                onPress={() => {
                    props.navigation.navigate('AcoesPesquisa');
                }}
                />
            <DrawerItem
                labelStyle={{ color: '#ffffff', fontFamily: 'AveriaLibre-Regular' }}
                label="Coleta"
                onPress={() => {
                    props.navigation.navigate('Coleta');
                }}
                />
            <DrawerItem
                labelStyle={{ color: '#ffffff', fontFamily: 'AveriaLibre-Regular' }}
                label="Agradecimento Participacao"
                onPress={() => {
                    props.navigation.navigate('AgradecimentoParticipacao');
                }}
                />
            <DrawerItem labelStyle={{ color: '#ffffff', fontFamily: 'AveriaLibre-Regular' }} label="Sair" onPress={() => { props.navigation.popToTop() }} />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    drawerEmail: {
        color: '#ffffff',
        fontFamily: 'AveriaLibre-Regular',
        alignSelf: 'center',
        marginVertical: 20,
    },
    line: {
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        width: '90%',
        alignSelf: 'center',
    }
})

export default DrawerNavigator