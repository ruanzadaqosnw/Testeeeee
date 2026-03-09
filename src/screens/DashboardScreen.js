import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { LayoutDashboard, Tablet, Key, Package, User, LogOut } from 'lucide-react-native';

export default function DashboardScreen({ navigation }) {
  const menuItems = [
    { title: 'Dispositivos', icon: Tablet, count: '0' },
    { title: 'Chaves', icon: Key, count: '0' },
    { title: 'Pacotes', icon: Package, count: '0' },
    { title: 'Perfil', icon: User, count: '' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.welcome}>Bem-vindo,</Text>
          <Text style={styles.userName}>Administrador</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <LayoutDashboard size={24} color="#9b4dff" />
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>Atividades</Text>
          </View>
        </View>

        <View style={styles.menuGrid}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuCard}>
              <item.icon size={28} color="#9b4dff" />
              <Text style={styles.menuTitle}>{item.title}</Text>
              {item.count !== '' && <Text style={styles.menuCount}>{item.count}</Text>}
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.logoutButton} 
          onPress={() => navigation.replace('Login')}
        >
          <LogOut size={20} color="#ff4d4d" />
          <Text style={styles.logoutText}>Sair da conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 30,
    marginTop: 20,
  },
  welcome: {
    fontSize: 16,
    color: '#888',
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  statsContainer: {
    marginBottom: 24,
  },
  statCard: {
    backgroundColor: '#111',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#222',
    alignItems: 'center',
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuCard: {
    width: '48%',
    backgroundColor: '#111',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#222',
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginTop: 12,
  },
  menuCount: {
    fontSize: 12,
    color: '#9b4dff',
    marginTop: 4,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40,
    padding: 15,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 77, 77, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 77, 77, 0.2)',
  },
  logoutText: {
    color: '#ff4d4d',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});
