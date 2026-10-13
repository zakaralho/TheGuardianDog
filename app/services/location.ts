export const requestLocation = async () => {
  const { status } = await (await import('expo-location')).requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    throw new Error('Permissão de localização negada');
  }

  const location = await (await import('expo-location')).getCurrentPositionAsync({});
  return location;
};
