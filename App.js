import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./src/screens/Login"
import Home from "./src/screens/Home"
import Cadastro from "./src/screens/Cadastro"
import RecuperarSenha from "./src/screens/RecuperarSenha"
import Coleta from "./src/screens/Coleta"
import AcoesPesquisa from "./src/screens/AcoesPesquisa"
import AgradecimentoParticipacao from "./src/screens/AgradecimentoParticipacao"
import ModificarPesquisa from "./src/screens/ModificarPesquisa"
import NovaPesquisa from "./src/screens/NovaPesquisa"
import Relatorio from "./src/screens/Relatorio"
import { Provider } from "react-redux"
import { store }from "./src/redux/store"

const Stack = createStackNavigator()

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Login" screenOptions={{ headerTintColor: '#ffffff', headerStyle: { backgroundColor: '#2B1D62' }, headerTitleStyle: { fontFamily: 'AveriaLibre-Regular' } }}>
					<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
					<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
					<Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Nova Conta' }} />
					<Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ title: 'Recuperação de Senha' }} />
					<Stack.Screen name="Coleta" component={Coleta} options={{ headerShown: false }} />
					<Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa} options={{ title: '' }} />
					<Stack.Screen name="NovaPesquisa" component={NovaPesquisa} options={{ title: 'Nova Pesquisa' }} />
					<Stack.Screen name="Relatório" component={Relatorio} />
					<Stack.Screen name="ModificarPesquisa" component={ModificarPesquisa} options={{ title: 'Modificar Pesquisa' }} />
					<Stack.Screen name="AgradecimentoParticipacao" component={AgradecimentoParticipacao} options={{ headerShown: false }} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}

export default App;