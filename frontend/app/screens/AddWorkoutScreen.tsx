import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Button, Picker } from 'react-native-elements';

const AddWorkoutScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleCreateWorkout = () => {
    // Implement workout creation logic here
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create New Workout</Text>
      <TextInput
        style={styles.input}
        placeholder="Workout Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Workout Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Picker
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Select Category" value="" />
        <Picker.Item label="Strength" value="strength" />
        <Picker.Item label="Cardio" value="cardio" />
        <Picker.Item label="Flexibility" value="flexibility" />
      </Picker>
      <Button
        title="Create Workout"
        onPress={handleCreateWorkout}
        buttonStyle={styles.createButton}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
  },
  createButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
  },
});

export default AddWorkoutScreen;

