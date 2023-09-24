import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SurveyCompleteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Obrigado por participar da pesquisa!</Text>
      <Text style={styles.title}>Aguardamos você no próximo ano!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'AveriaLibre-Regular',
  },
});
