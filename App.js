//Import
import { View, Text, TextInput, Image, StyleSheet } from 'react-native'

//Define
const App = () => {

	return (
		<View style={styles.view}>
        <View style={styles.title} >
          <Text style={styles.text}>Satisfying.you</Text>
        </View>
				
		</View>
	)
}

const styles = StyleSheet.create({
	view: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#372775',
		padding: 20,
	},
	title: {
    flexDirection: 'row',
    justifyContent: 'center',
	},
  text: {
    fontSize: 36,
		color: '#ffffff',
		fontFamily: 'AveriaLibre-Regular',
  }
})


//Export
export default App
