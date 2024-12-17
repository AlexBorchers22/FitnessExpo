import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar, ListItem, Button } from 'react-native-elements';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar
          rounded
          size="large"
          source={{ uri: 'https://example.com/user-avatar.jpg' }}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Current Weight</ListItem.Title>
          <ListItem.Subtitle>75 kg</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>Fitness Goals</ListItem.Title>
          <ListItem.Subtitle>Build Muscle</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <Button
        title="Edit Profile"
        onPress={() => {/* Navigate to edit profile screen */}}
        buttonStyle={styles.editButton}
      />
      <Button
        title="Settings"
        onPress={() => {/* Navigate to settings screen */}}
        buttonStyle={styles.settingsButton}
        type="outline"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  editButton: {
    margin: 20,
    backgroundColor: '#007AFF',
  },
  settingsButton: {
    marginHorizontal: 20,
  },
});

export default ProfileScreen;

