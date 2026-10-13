import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Header from '../components/Header';
import NotificationBell from '../components/NotificationBell';

const initialNotifications = [
  { id: 1, title: 'Passeio em andamento', message: 'Rex está seguro e em rota monitorada.', time: '2 min atrás', unread: true },
  { id: 2, title: 'Alerta do tutor', message: 'Alex Silva confirmou sua localização.', time: '15 min atrás', unread: true },
  { id: 3, title: 'Pagamento aprovado', message: 'Seu pacote Gold foi confirmado.', time: '1h atrás', unread: false },
];

export default function HomeScreen() {
  const [secondsElapsed, setSecondsElapsed] = useState(1335);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const startTimeRef = useRef(Date.now() - secondsElapsed * 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
      setSecondsElapsed(elapsed);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const unreadCount = notifications.filter((item) => item.unread).length;

  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, unread: false })));
  };

  const triggerEmergency = () => {
    Alert.alert(
      '⚠️ ALERTA DE PÂNICO',
      'A Central de Monitoramento The Guardian Dog foi acionada com sua geolocalização exata.',
      [{ text: 'OK', style: 'destructive' }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        unreadCount={unreadCount}
        onPressBell={() => setShowNotifications((prev) => !prev)}
      />

      {showNotifications && (
        <View style={styles.notificationsPanel}>
          <View style={styles.notificationsHeader}>
            <Text style={styles.notificationsTitle}>Notificações</Text>
            <TouchableOpacity onPress={markAllAsRead}>
              <Text style={styles.notificationsAction}>Marcar como lidas</Text>
            </TouchableOpacity>
          </View>

          {notifications.map((item) => (
            <View
              key={item.id}
              style={[styles.notificationItem, item.unread && styles.notificationItemUnread]}
            >
              <View style={styles.notificationDot} />
              <View style={styles.notificationTextWrap}>
                <Text style={styles.notificationItemTitle}>{item.title}</Text>
                <Text style={styles.notificationItemMessage}>{item.message}</Text>
              </View>
              <Text style={styles.notificationTime}>{item.time}</Text>
            </View>
          ))}
        </View>
      )}

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.spaceY}>
          <View style={styles.card}>
            <Text style={styles.cardHeaderTitle}>My Active Services</Text>

            <View style={styles.mapBox}>
              <View style={styles.gpsPin}>
                <FontAwesome5 name="location-arrow" size={12} color="#fbbf24" />
              </View>
              <View style={styles.dogPin}>
                <FontAwesome5 name="dog" size={12} color="#080b10" />
              </View>
              <Text style={styles.mapTextMock}>📍 Rota ao vivo em andamento...</Text>
            </View>

            <View style={styles.walkerRow}>
              <View style={styles.walkerInfo}>
                <View style={styles.avatarMock}>
                  <FontAwesome5 name="user-alt" size={14} color="#fbbf24" />
                </View>
                <View>
                  <Text style={styles.textMuted}>Current Walk:</Text>
                  <View style={styles.row}>
                    <Text style={styles.walkerName}>Alex Silva</Text>
                    <Text style={styles.walkerRank}> (Bronze)</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.tripFooter}>
              <View>
                <Text style={styles.textMuted}>Current Dog:</Text>
                <Text style={styles.dogName}>Rex</Text>
              </View>
              <View>
                <Text style={styles.textMuted}>Time Elapsed:</Text>
                <Text style={styles.timerText}>{formatTime(secondsElapsed)}</Text>
              </View>
              <TouchableOpacity style={styles.goldButtonSmall} onPress={triggerEmergency}>
                <Text style={styles.goldButtonSmallText}>SOS</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>WALKER RANKINGS</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.rankingScroll}>
            <View style={styles.rankCard}>
              <FontAwesome5 name="star" size={16} color="#fbbf24" />
              <Text style={styles.rankTitleGold}>Gold</Text>
              <Text style={styles.rankSub}>75+ passeios</Text>
            </View>

            <View style={[styles.rankCard, styles.rankCardActive]}>
              <FontAwesome5 name="medal" size={16} color="#fff" />
              <Text style={styles.rankTitleActive}>Silver</Text>
              <Text style={styles.rankSubWhite}>Ana S.</Text>
            </View>

            <View style={styles.rankCard}>
              <FontAwesome5
                name="lock"
                size={12}
                color="#d97706"
                style={{ position: 'absolute', top: 8, right: 8 }}
              />
              <FontAwesome5 name="user" size={16} color="#d97706" />
              <Text style={styles.rankTitleBronze}>Bronze</Text>
              <Text style={styles.rankSub}>10+ passeios</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <NotificationBell unreadCount={unreadCount} onPress={() => setShowNotifications((prev) => !prev)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#080B10' },
  notificationsPanel: {
    backgroundColor: '#121722',
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(212,175,55,0.25)',
    padding: 12,
  },
  notificationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  notificationsTitle: {
    color: '#fbbf24',
    fontWeight: 'bold',
    fontSize: 12,
  },
  notificationsAction: {
    color: '#cbd5e1',
    fontSize: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.02)',
    padding: 10,
    borderRadius: 12,
    marginBottom: 8,
    gap: 8,
  },
  notificationItemUnread: {
    backgroundColor: 'rgba(251, 191, 36, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(251, 191, 36, 0.18)',
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#f43f5e',
    marginTop: 6,
  },
  notificationTextWrap: { flex: 1 },
  notificationItemTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 11,
    marginBottom: 2,
  },
  notificationItemMessage: {
    color: '#cbd5e1',
    fontSize: 10,
    lineHeight: 15,
  },
  notificationTime: {
    color: '#94a3b8',
    fontSize: 9,
    marginLeft: 6,
  },
  scrollContent: { padding: 16, paddingBottom: 100 },
  spaceY: { gap: 16 },
  card: {
    backgroundColor: '#121722',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(212,175,55,0.3)',
  },
  cardHeaderTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  mapBox: {
    height: 110,
    backgroundColor: '#0b0f17',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(212,175,55,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  gpsPin: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#121722',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fbbf24',
  },
  dogPin: {
    position: 'absolute',
    bottom: 15,
    right: 20,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fbbf24',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapTextMock: { fontSize: 10, color: '#94a3b8' },
  walkerRow: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  walkerInfo: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  avatarMock: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fbbf24',
  },
  textMuted: { fontSize: 10, color: '#94a3b8' },
  row: { flexDirection: 'row', alignItems: 'center' },
  walkerName: { fontSize: 12, fontWeight: 'bold', color: '#fff' },
  walkerRank: { fontSize: 10, color: '#fbbf24' },
  tripFooter: {
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dogName: { fontSize: 12, fontWeight: 'bold', color: '#fbbf24' },
  timerText: {
    fontSize: 12,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#fff',
  },
  goldButtonSmall: {
    backgroundColor: '#fbbf24',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 10,
  },
  goldButtonSmallText: { fontSize: 11, fontWeight: 'bold', color: '#080b10' },
  sectionHeader: { marginTop: 10 },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#cbd5e1',
    letterSpacing: 1,
  },
  rankingScroll: { flexDirection: 'row', marginTop: 5 },
  rankCard: {
    width: 90,
    backgroundColor: '#121722',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'rgba(212,175,55,0.2)',
  },
  rankCardActive: {
    backgroundColor: '#1e293b',
    borderWidth: 2,
    borderColor: '#fbbf24',
  },
  rankTitleGold: { fontSize: 11, fontWeight: 'bold', color: '#fbbf24', marginTop: 4 },
  rankTitleActive: { fontSize: 11, fontWeight: 'bold', color: '#fff', marginTop: 4 },
  rankTitleBronze: { fontSize: 11, fontWeight: 'bold', color: '#d97706', marginTop: 4 },
  rankSub: { fontSize: 8, color: '#94a3b8', marginTop: 2 },
  rankSubWhite: { fontSize: 9, fontWeight: 'bold', color: '#fbbf24', marginTop: 2 },
});
