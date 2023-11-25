import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { updateDoc, doc, getDoc } from "firebase/firestore"
import { db } from '../config/firebase'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSelector } from 'react-redux'

const Coleta = (props) => {
  const id = useSelector(state => state.pesquisa.id)
  const pesquisaRef = doc(db, 'pesquisas', id)

  const updateVote = async (voteType) => {
    try {
      const docPesquisa = await getDoc(pesquisaRef)

      if (docPesquisa.exists()) {
        const currentVotes = docPesquisa.data().votos
        currentVotes[voteType] += 1;

        await updateDoc(pesquisaRef, { votos: currentVotes })

        console.log(`Voto ${voteType} computado com sucesso!`)
        props.navigation.navigate('AgradecimentoParticipacao')
      } else {
        console.log("Documento não encontrado!")
      }
    } catch (error) {
      console.log("Erro ao computar o voto:", error)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>O que você achou do Carnaval 2024?</Text>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => updateVote('pessimo')}>
          <Icon name="sentiment-very-dissatisfied" size={60} color="#FF0000" />
          <Text style={styles.iconText}>Péssimo</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => updateVote('ruim')}>
          <Icon name="sentiment-dissatisfied" size={60} color="#FF5733" />
          <Text style={styles.iconText}>Ruim</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => updateVote('neutro')}>
          <Icon name="sentiment-neutral" size={60} color="#FFC300" />
          <Text style={styles.iconText}>Neutro</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => updateVote('bom')}>
          <Icon name="sentiment-satisfied" size={60} color="#33FF57" />
          <Text style={styles.iconText}>Bom</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => updateVote('excelente')}>
          <Icon name="sentiment-very-satisfied" size={60} color="#00FF00" />
          <Text style={styles.iconText}>Excelente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#372775',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
    width: '100%',
  },
  iconText: {
    fontSize: 14,
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

export default Coleta;