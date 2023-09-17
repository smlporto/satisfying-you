import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./src/screens/Login"
import Home from "./src/screens/Home"

const Stack = createStackNavigator()

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login" screenOptions={{ headerTintColor:'#ffffff', headerStyle: {backgroundColor:'#372775'}, headerTitleStyle: {fontFamily: 'AveriaLibre-Regular'}}}>
				<Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
				<Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App;