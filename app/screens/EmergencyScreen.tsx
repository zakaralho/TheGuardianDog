import React from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function EmergencyScreen() {
  const triggerEmergency = () => {
    Alert.alert(
      '⚠️ ALERTA DE PÂNICO',
      'A Central de Monitoramento The Guardian Dog foi acionada com sua geolocalização exata.',
      [{ text: 'OK', style: 'destructive' }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alertBox}>
        <MaterialCommunityIcons name="alert-octagon" size={52} color="#f43f5e" />
        <Text style={styles.alertTitle}>CENTRAL DE EMERGÊNCIA</Text>
        <Text style={styles.alertDesc}>
          Pressione o botão abaixo para alertar os tutores e suporte operacional instantaneamente.
        </Text>

        <TouchableOpacity style={styles.panicButton} onPress={triggerEmergency}>
          <Text style={styles.panicButtonText}>DISPARAR PÂNICO IMEDIATO</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080B10',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  alertBox: {
    backgroundColor: 'rgba(136, 19, 55, 0.2)',
    borderWidth: 1,
    borderColor: '#f43f5e',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    gap: 12,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fca5a5',
  },
  alertDesc: {
    fontSize: 12,
    color: '#cbd5e1',
    textAlign: 'center',
    lineHeight: 18,
  },
  panicButton: {
    width: '100%',
    marginTop: 10,
    backgroundColor: '#e11d48',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  panicButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
