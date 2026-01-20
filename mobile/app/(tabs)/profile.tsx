import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProfileTab() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>R</Text>
        </View>
        <Text style={styles.name}>Raul</Text>
        <Text style={styles.email}>raul@ejemplo.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cuenta</Text>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Editar perfil</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Notificaciones</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Configuracion</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Soporte</Text>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Ayuda</Text>
        </View>
        <View style={styles.menuItem}>
          <Text style={styles.menuText}>Terminos y condiciones</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F7' },
  headerContainer: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 20
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: { fontSize: 32, fontWeight: 'bold', color: 'white' },
  name: { fontSize: 24, fontWeight: '700', color: '#1C1C1E' },
  email: { fontSize: 14, color: '#8E8E93', marginTop: 4 },

  section: { marginBottom: 20 },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#8E8E93',
    marginLeft: 16,
    marginBottom: 8,
    textTransform: 'uppercase'
  },
  menuItem: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5EA',
  },
  menuText: { fontSize: 16, color: '#1C1C1E' },
});
