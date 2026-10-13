import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type HeaderProps = {
  unreadCount: number;
  onPressBell: () => void;
};

export default function Header({ unreadCount, onPressBell }: HeaderProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Ionicons name="menu" size={24} color="#94a3b8" />
      </TouchableOpacity>

      <View style={styles.headerTitleContainer}>
        <Text style={styles.headerTitle}>THE GUARDIAN DOG</Text>
        <Text style={styles.headerSubtitle}>“SEU PET, NOSSA PROTEÇÃO”</Text>
      </View>

      <TouchableOpacity onPress={onPressBell} style={styles.notificationButton}>
        <Ionicons name="notifications" size={20} color="#f43f5e" />
        {unreadCount > 0 && (
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationBadgeText}>{unreadCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0B0F17',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(212,175,55,0.2)',
  },
  headerTitleContainer: { alignItems: 'center' },
  headerTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#fbbf24',
    letterSpacing: 2,
  },
  headerSubtitle: { fontSize: 8, color: 'rgba(255,255,255,0.6)' },
  notificationButton: {
    position: 'relative',
    padding: 8,
    borderRadius: 10,
    backgroundColor: 'rgba(244, 63, 94, 0.08)',
  },
  notificationBadge: {
    position: 'absolute',
    right: -4,
    top: -4,
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#f43f5e',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  notificationBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
