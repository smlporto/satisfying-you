import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./src/screens/Login"
import Home from "./src/screens/Home"
import Coleta from "./src/screens/Coleta"
import AcoesPesquisa from "./src/screens/AcoesPesquisa"
import AgradecimentoParticipacao from "./src/screens/AgradecimentoParticipacao"

const Stack = createStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login" screenOptions={{ headerTintColor:'#ffffff', headerStyle: {backgroundColor:'#372775'}, headerTitleStyle: {fontFamily: 'AveriaLibre-Regular'}}}>
				<Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
				<Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
				<Stack.Screen name="Coleta" component={Coleta} options={{ headerShown: false }}/>
				<Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa} options={{ headerShown: false }}/>
				<Stack.Screen name="AgradecimentoParticipacao" component={AgradecimentoParticipacao} options={{ headerShown: false }}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App;