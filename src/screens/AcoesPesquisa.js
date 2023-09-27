import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  const handleSquarePress = (message) => {
    // Ação a ser executada quando um quadrado for pressionado (substitua pelo seu código)
    alert(message);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleSquarePress('Casa')}>
        <View style={styles.square}>
          <Icon name="edit" size={80} color="#fff" />
          <Text style={styles.text}>Modificar</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSquarePress('Estrela')}>
        <View style={styles.square}>
          <Icon name="sentiment-very-satisfied" size={80} color="#fff" />
          <Text style={styles.text}>Coleta de dados</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSquarePress('Coração')}>
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#372775',
    paddingHorizontal: 20,
  },
  square: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 170,
    height: 170,
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
