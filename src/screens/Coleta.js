import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function FeedbackScreen() {
  const [feedback, setFeedback] = useState('');

  const handleFeedback = (value) => {
    setFeedback(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>O que você achou do Carnaval 2024?</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => handleFeedback('Péssimo')}>
          <Icon name="sentiment-very-dissatisfied" size={80} color="#FF0000" />
          <Text style={styles.iconText}>Péssimo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFeedback('Ruim')}>
          <Icon name="sentiment-dissatisfied" size={80} color="#FF5733" />
          <Text style={styles.iconText}>Ruim</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFeedback('Neutro')}>
          <Icon name="sentiment-neutral" size={80} color="#FFC300" />
          <Text style={styles.iconText}>Neutro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFeedback('Bom')}>
          <Icon name="sentiment-satisfied" size={80} color="#33FF57" />
          <Text style={styles.iconText}>Bom</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleFeedback('Excelente')}>
          <Icon name="sentiment-very-satisfied" size={80} color="#00FF00" />
          <Text style={styles.iconText}>Excelente</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.selectedFeedback}>Você selecionou: {feedback}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  iconText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'AveriaLibre-Regular',
  },
  selectedFeedback: {
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
  },
});
