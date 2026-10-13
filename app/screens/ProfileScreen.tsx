import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Perfil</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.value}>Alex Silva</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Tipo de conta</Text>
          <Text style={styles.value}>Tutor Premium</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Pet principal</Text>
          <Text style={styles.value}>Rex</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Status</Text>
          <Text style={styles.value}>Monitoramento ativo</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080B10',
  },
  content: { padding: 20 },
  title: {
    color: '#fbbf24',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  card: {
    backgroundColor: '#121722',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: 'rgba(212,175,55,0.2)',
    marginBottom: 12,
  },
  label: {
    color: '#94a3b8',
    fontSize: 10,
    marginBottom: 4,
  },
  value: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
