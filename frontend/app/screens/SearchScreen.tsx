import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';

const dummySearchResults = [
  { id: '1', title: 'Full Body Workout', type: 'Workout' },
  { id: '2', title: 'John Doe', type: 'User' },
  { id: '3', title: 'Squats', type: 'Exercise' },
  { id: '4', title: 'High Protein Diet', type: 'Nutrition' },
];

const SearchScreen = () => {
  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    setSearch(search);
    // Implement search logic here
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search workouts, users, exercises..."
        onChangeText={updateSearch}
        value={search}
      />
      {dummySearchResults.map((item) => (
        <ListItem key={item.id} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.type}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default SearchScreen;

