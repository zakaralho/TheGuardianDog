import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const sampleNotifications = [
  { id: 1, title: 'Passeio em andamento', message: 'Rex está seguro e em rota monitorada.', time: '2 min atrás', unread: true },
  { id: 2, title: 'Alerta do tutor', message: 'Alex Silva confirmou sua localização.', time: '15 min atrás', unread: true },
  { id: 3, title: 'Pagamento aprovado', message: 'Seu pacote Gold foi confirmado.', time: '1h atrás', unread: false },
];

export default function NotificationsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Notificações</Text>

        {sampleNotifications.map((item) => (
          <View key={item.id} style={[styles.card, item.unread && styles.cardUnread]}>
            <View style={styles.dot} />
            <View style={styles.textWrap}>
              <Text style={styles.heading}>{item.title}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
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
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  cardUnread: {
    backgroundColor: 'rgba(251, 191, 36, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.12)',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#f43f5e',
    marginTop: 8,
    marginRight: 10,
  },
  textWrap: { flex: 1 },
  heading: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  message: {
    color: '#cbd5e1',
    fontSize: 11,
    marginTop: 4,
    lineHeight: 17,
  },
  time: {
    color: '#94a3b8',
    fontSize: 9,
    marginLeft: 8,
  },
});
