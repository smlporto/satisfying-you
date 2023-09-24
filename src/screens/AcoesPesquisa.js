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
          <Icon name="home" size={80} color="#fff" />
          <Text style={styles.text}>Casa</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSquarePress('Estrela')}>
        <View style={styles.square}>
          <Icon name="star" size={80} color="#fff" />
          <Text style={styles.text}>Estrela</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSquarePress('Coração')}>
        <View style={styles.square}>
          <Icon name="favorite" size={80} color="#fff" />
          <Text style={styles.text}>Coração</Text>
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
    width: 120,
    height: 120,
    backgroundColor: '#312464',
    borderRadius: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
  },
});
