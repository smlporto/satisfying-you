import { createDrawerNavigator } from "@react-navigation/drawer"
import Pesquisas from "./Pesquisas"
import DrawerNavigator from "./DrawerNavigator"

const Drawer = createDrawerNavigator()

const Home = () => {
    return (
        <Drawer.Navigator screenOptions={{ drawerLabelStyle: {fontFamily: 'AveriaLibre-Regular', color: '#ffffff'}, drawerStyle: {backgroundColor: '#372775'}, headerTintColor:'#ffffff', headerStyle: {backgroundColor:'#372775'}, headerTitleStyle: {fontFamily: 'AveriaLibre-Regular'}}} drawerContent={(props) => <DrawerNavigator {...props} />} >
            <Drawer.Screen name="Pesquisas" component={Pesquisas}/>
        </Drawer.Navigator>
    )
}

export default Home