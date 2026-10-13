import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const plans = [
  {
    title: 'Primeiro Passeio',
    description: 'Promoção de boas-vindas: 1 passeio para qualquer porte.',
    oldPrice: 'R$ 35,00',
    newPrice: 'R$ 15,00',
    action: 'Contratar',
  },
  {
    title: 'Guarda Diamante',
    description: '25 passeios no mês, todos os portes (40 min).',
    oldPrice: 'R$ 1.890,00',
    newPrice: 'R$ 1.350,00',
    action: 'Assinar',
  },
];

export default function ServicesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Valores & Pacotes</Text>

        {plans.map((plan) => (
          <View key={plan.title} style={styles.card}>
            <Text style={styles.cardTitle}>{plan.title}</Text>
            <Text style={styles.cardText}>{plan.description}</Text>

            <View style={styles.row}>
              <Text style={styles.oldPrice}>{plan.oldPrice}</Text>
              <Text style={styles.newPrice}>{plan.newPrice}</Text>
              <View style={styles.actionButton}>
                <Text style={styles.actionText}>{plan.action}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#080B10' },
  content: { padding: 20 },
  title: {
    color: '#fbbf24',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  card: {
    backgroundColor: '#121722',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(212,175,55,0.2)',
    marginBottom: 16,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardText: {
    color: '#94a3b8',
    fontSize: 12,
    lineHeight: 18,
  },
  row: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.08)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  oldPrice: {
    color: '#64748b',
    fontSize: 11,
    textDecorationLine: 'line-through',
  },
  newPrice: {
    color: '#fbbf24',
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionButton: {
    backgroundColor: '#fbbf24',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  actionText: {
    color: '#080B10',
    fontSize: 11,
    fontWeight: 'bold',
  },
});
