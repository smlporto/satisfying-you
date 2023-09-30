import { View, Text, StyleSheet } from "react-native"
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import Icon from 'react-native-vector-icons/Octicons'

const DrawerNavigator = (props) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }} >
            <View>
                <Text style={styles.drawerEmail}>jurandir.pereira@hotmail.com</Text>
            </View>
            <View style={styles.line} />
            <DrawerItem
                labelStyle={{ color: '#ffffff', fontFamily: 'AveriaLibre-Regular', fontSize: 16 }}
                label="Ações de Pesquisa"
                onPress={() => {
                    props.navigation.navigate('AcoesPesquisa');
                }}
            />
            <DrawerItem
                labelStyle={{ color: '#ffffff', fontFamily: 'AveriaLibre-Regular', fontSize: 16 }}
                label="Coleta"
                onPress={() => {
                    props.navigation.navigate('Coleta');
                }}
            />
            <DrawerItem
                labelStyle={{ color: '#ffffff', fontFamily: 'AveriaLibre-Regular', fontSize: 16 }}
                label="Agradecimento Participacao"
                onPress={() => {
                    props.navigation.navigate('AgradecimentoParticipacao');
                }}
            />
            <View style={styles.bottomItem}>
                <DrawerItem
                    icon={() => <Icon style={styles.icon} name="sign-out" size={20} color="#ffffff" />}
                    labelStyle={{ color: '#ffffff', fontFamily: 'AveriaLibre-Regular', fontSize: 16 }}
                    label="Sair"
                    onPress={() => { props.navigation.popToTop() }}
                />
            </View>
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
    },
    bottomItem: {
        marginTop: 'auto',
    }

})

export default DrawerNavigator