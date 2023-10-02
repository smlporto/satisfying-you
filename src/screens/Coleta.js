import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Coleta = (props) => {

  const goToAgradecimentoParticipacao = () => {
    props.navigation.navigate('AgradecimentoParticipacao')
  };

  return (
    <View style={styles.container}>  
    {/* View para o cabeçalho */}    
      <View style={styles.header}> 
        <Text style={styles.title}>O que você achou do Carnaval 2024?</Text>
      </View>
      {/* Container para os ícones de feedback */}
      <View style={styles.iconContainer}> 
        <TouchableOpacity onPress={goToAgradecimentoParticipacao}>
          <Icon name="sentiment-very-dissatisfied" size={60} color="#FF0000" />
          <Text style={styles.iconText}>Péssimo</Text>
        </TouchableOpacity>
        {/* ícone de feedback */}
        <TouchableOpacity onPress={goToAgradecimentoParticipacao}> 
          <Icon name="sentiment-dissatisfied" size={60} color="#FF5733" />
          <Text style={styles.iconText}>Ruim</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToAgradecimentoParticipacao}>
          <Icon name="sentiment-neutral" size={60} color="#FFC300" />
          <Text style={styles.iconText}>Neutro</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToAgradecimentoParticipacao}>
          <Icon name="sentiment-satisfied" size={60} color="#33FF57" />
          <Text style={styles.iconText}>Bom</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToAgradecimentoParticipacao}>
          <Icon name="sentiment-very-satisfied" size={60} color="#00FF00" />
          <Text style={styles.iconText}>Excelente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { // Estilo para a view
    flex: 1,
    backgroundColor: '#372775',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: { // Estilo para o cabeçalho
    marginBottom: 30,
  },
  title: { // Estilo para o título do cabeçalho
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
  },
  iconContainer: { // Estilo para o container dos ícones de feedback
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    width: '100%',
  },
  iconText: { // Estilo para o texto abaixo dos ícones
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'AveriaLibre-Regular',
  },
  selectedFeedback: { // Estilo para o feedback
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
  },
})

export default Coleta