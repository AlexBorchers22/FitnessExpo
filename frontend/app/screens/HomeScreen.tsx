import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

const dummyData = [
  { id: '1', user: 'John', workout: 'Full Body Workout' },
  { id: '2', user: 'Jane', workout: 'HIIT Cardio' },
  { id: '3', user: 'Mike', workout: 'Leg Day' },
];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title title={`${item.user} completed ${item.workout}`} />
      <Card.Actions>
        <Button onPress={() => {}}>View Details</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Your Feed</Text>
      <FlatList
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  title: {
    marginBottom: 20,
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 10,
  },
});

export default HomeScreen;

