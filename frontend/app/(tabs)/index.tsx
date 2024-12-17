import React from 'react';
import { View, FlatList } from 'react-native';
import { Card, Text, Button, useTheme } from 'react-native-paper';
import theme from '../theme';

interface WorkoutItem {
  id: string;
  user: string;
  workout: string;
}

const dummyData: WorkoutItem[] = [
  { id: '1', user: 'John', workout: 'Full Body Workout' },
  { id: '2', user: 'Jane', workout: 'HIIT Cardio' },
  { id: '3', user: 'Mike', workout: 'Leg Day' },
];

export default function Home() {
  const paperTheme = useTheme();

  const renderItem = ({ item }: { item: WorkoutItem }) => (
    <Card style={{ marginBottom: 12, backgroundColor: theme.colors.surface }}>
      <Card.Title 
        title={`${item.user} completed ${item.workout}`}
        titleStyle={{ color: theme.colors.text.primary }}
      />
      <Card.Actions>
        <Button 
          mode="contained"
          buttonColor={theme.colors.primary}
          onPress={() => {}}
        >
          View Details
        </Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background, padding: 16 }}>
      <Text 
        variant="headlineMedium" 
        style={{ 
          marginBottom: 24, 
          color: theme.colors.text.primary,
          fontWeight: 'bold'
        }}
      >
        Your Feed
      </Text>
      <FlatList
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
} 