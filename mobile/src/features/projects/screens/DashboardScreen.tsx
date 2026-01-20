import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>👷 Hola, Raúl</Text>
        <Text style={styles.subHeader}>Tus Obras Activas</Text>
      </View>

      {/* Tarjeta 1: En Curso */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Remodelación Baño</Text>
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>En Curso 🔨</Text>
          </View>
        </View>
        <Text style={styles.cardAddress}>📍 Av. Providencia 1234</Text>
        <Text style={styles.cardDate}>Inicio: 15 Ene 2026</Text>
      </View>

      {/* Tarjeta 2: Terminado */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Ampliación Cocina</Text>
          <View style={[styles.badgeContainer, styles.badgeDone]}>
            <Text style={[styles.badgeText, styles.textDone]}>Terminado ✅</Text>
          </View>
        </View>
        <Text style={styles.cardAddress}>📍 Calle Los Alerces 55</Text>
        <Text style={styles.cardDate}>Entregado: 10 Ene 2026</Text>
      </View>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F2F7' },
  headerContainer: { padding: 20, paddingTop: 60, backgroundColor: 'white', marginBottom: 10 },
  header: { fontSize: 28, fontWeight: '800', color: '#1C1C1E' },
  subHeader: { fontSize: 16, color: '#8E8E93', marginTop: 4 },
  
  card: { 
    backgroundColor: 'white', 
    marginHorizontal: 16,
    marginBottom: 16, 
    padding: 16, 
    borderRadius: 16, 
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  cardTitle: { fontSize: 18, fontWeight: '700', color: '#000' },
  cardAddress: { fontSize: 14, color: '#666', marginBottom: 4 },
  cardDate: { fontSize: 12, color: '#999' },
  
  badgeContainer: { backgroundColor: '#E0F2FE', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  badgeText: { color: '#0284C7', fontSize: 12, fontWeight: 'bold' },
  
  badgeDone: { backgroundColor: '#DCFCE7' },
  textDone: { color: '#166534' }
});