import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const ActiveWorkoutScreen = ({ route }) => {
  const { workout } = route.params;
  const [currentExercise, setCurrentExercise] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workout.title}</Text>
      <Text style={styles.timer}>{formatTime(timer)}</Text>
      <Text style={styles.exercise}>Current Exercise: Exercise {currentExercise + 1}</Text>
      <Button
        title="Next Exercise"
        onPress={() => setCurrentExercise((prev) => prev + 1)}
        buttonStyle={styles.nextButton}
      />
      <Button
        title="Finish Workout"
        onPress={() => {/* Navigate back to Workouts screen */}}
        buttonStyle={styles.finishButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  exercise: {
    fontSize: 18,
    marginBottom: 30,
  },
  nextButton: {
    marginBottom: 10,
    backgroundColor: '#007AFF',
  },
  finishButton: {
    backgroundColor: '#FF3B30',
  },
});

export default ActiveWorkoutScreen;

