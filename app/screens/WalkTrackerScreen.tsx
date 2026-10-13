import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function WalkTrackerScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permissão de localização negada');
        return;
      }

      const current = await Location.getCurrentPositionAsync({});
      setLocation(current);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tracker de Passeio</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location?.coords.latitude || -23.5505,
          longitude: location?.coords.longitude || -46.6333,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Rex"
            description="Pet em segurança"
          />
        )}
      </MapView>

      <View style={styles.infoCard}>
        <Text style={styles.infoText}>Latitude: {location?.coords.latitude?.toFixed(5) ?? '---'}</Text>
        <Text style={styles.infoText}>Longitude: {location?.coords.longitude?.toFixed(5) ?? '---'}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080B10',
    padding: 16,
  },
  title: {
    color: '#fbbf24',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  map: {
    height: 300,
    borderRadius: 18,
    overflow: 'hidden',
  },
  infoCard: {
    backgroundColor: '#121722',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'rgba(212,175,55,0.2)',
  },
  infoText: {
    color: '#e2e8f0',
    fontSize: 12,
    marginBottom: 6,
  },
});
