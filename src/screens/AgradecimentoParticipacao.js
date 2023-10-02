import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AgradecimentoParticipacao = (props) => {

  setTimeout(() => {
    props.navigation.navigate('Coleta')
  }, 3000);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Obrigado por participar da pesquisa!</Text>
      <Text style={styles.title}>Aguardamos você no próximo ano!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { // Estilo para o componente 'container'
    flex: 1,
    backgroundColor: '#372775',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: { // Estilo para os componentes 'title'
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'AveriaLibre-Regular',
  },
})

export default AgradecimentoParticipacao