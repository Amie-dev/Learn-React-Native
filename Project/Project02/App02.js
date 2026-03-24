import { View, Text, ScrollView, StyleSheet } from 'react-native';

const seedData = [
  { name: 'Aminul', age: 20, G: 'M' },
  { name: 'Reki', age: 18, G: 'M' },
  { name: 'Sahar', age: 21, G: 'M' },
  { name: 'Mufasar', age: 19, G: 'F' },
  { name: 'Shedded', age: 20, G: 'F' },
];

const AppContent = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {seedData.map((data, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.info}>Age: {data.age}</Text>
          <Text style={styles.info}>Gender: {data.G}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export const App02 = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#f3f4f6' }}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>User List</Text>
      </View>

      {/* Horizontal Cards */}
      <View style={{
        backgroundColor:'black'
      }}>
        <AppContent />
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={{ color: 'white' }}>Footer Section</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 120,
    backgroundColor: '#1e40af',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  scrollContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },

  card: {
    width: 140,
    height: 160,
    backgroundColor: 'white',
    marginRight: 12,
    borderRadius: 15,
    padding: 12,
    // display:'flex',
    justifyContent:'center',
    alignItems:'center',
    // Shadow (Android + iOS)
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  info: {
    fontSize: 14,
    color: '#555',
  },

  footer: {
    width: '100%',
    height: 180,
    backgroundColor: '#ef4444',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 10,
  },
});