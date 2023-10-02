import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
          <Icon name="file-document-edit-outline" size={80} color="#fff" />
          <Text style={styles.text}>Modificar</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToDataCollect}>
        <View style={styles.square}>
          <Icon name="checkbox-multiple-marked-outline" size={80} color="#fff" />
          <Text style={styles.text}>Coleta de dados</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToReport}>
        <View style={styles.square}>
          <Icon name="chart-donut" size={80} color="#fff" />
          <Text style={styles.text}>Relatório</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { // Define um contêiner flexível
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#372775',
    gap: 30,
  },
  square: { // Define o estilo para os quadrados
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