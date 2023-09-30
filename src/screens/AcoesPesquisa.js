import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App(props) {

  const goToEditSearch = () => {
    props.navigation.navigate('ModificarPesquisa')
  };

  const goToDataCollect= () => {
    props.navigation.navigate('Coleta')
  };

  const goToReport = () => {
    props.navigation.navigate('Relatório')
  };

  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToEditSearch}>
        <View style={styles.square}>
          <Icon name="edit" size={80} color="#fff" />
          <Text style={styles.text}>Modificar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToDataCollect}>
        <View style={styles.square}>
          <Icon name="sentiment-very-satisfied" size={80} color="#fff" />
          <Text style={styles.text}>Coleta de dados</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToReport}>
        <View style={styles.square}>
          <Icon name="pie-chart" size={80} color="#fff" />
          <Text style={styles.text}>Relatório</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'col',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#372775',
    gap: 30,
  },
  square: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: 200,
    backgroundColor: '#312464',
    borderRadius: 10,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
  },
});
