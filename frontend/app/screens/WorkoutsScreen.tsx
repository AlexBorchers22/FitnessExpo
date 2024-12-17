import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ListItem, Button } from 'react-native-elements';

const dummyWorkouts = [
  { id: '1', title: 'Full Body Workout', duration: '60 min' },
  { id: '2', title: 'HIIT Cardio', duration: '30 min' },
  { id: '3', title: 'Leg Day', duration: '45 min' },
];

const WorkoutsScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
        <ListItem.Subtitle>{item.duration}</ListItem.Subtitle>
      </ListItem.Content>
      <Button
        title="Start"
        onPress={() => navigation.navigate('ActiveWorkout', { workout: item })}
        type="clear"
      />
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Workouts</Text>
      <FlatList
        data={dummyWorkouts}
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default WorkoutsScreen;

