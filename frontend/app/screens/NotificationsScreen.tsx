import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

const dummyNotifications = [
  { id: '1', title: 'John completed a workout', type: 'friend' },
  { id: '2', title: 'New workout recommendation', type: 'system' },
  { id: '3', title: 'You\'ve reached a new milestone!', type: 'achievement' },
];

const NotificationsScreen = () => {
  const renderItem = ({ item }) => (
    <ListItem bottomDivider>
      <Icon
        name={item.type === 'friend' ? 'person' : item.type === 'system' ? 'notifications' : 'star'}
        type="ionicon"
      />
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={dummyNotifications}
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

export default NotificationsScreen;

