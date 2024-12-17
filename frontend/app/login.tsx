import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { router } from 'expo-router';
import theme from './theme';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    router.replace('/(tabs)/');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/icon.png')} 
        style={styles.logo}
        resizeMode="contain"
      />
      <TextInput
        style={styles.input}
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
        outlineColor={theme.colors.primary}
        activeOutlineColor={theme.colors.primary}
      />
      <TextInput
        style={styles.input}
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        mode="outlined"
        outlineColor={theme.colors.primary}
        activeOutlineColor={theme.colors.primary}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off" : "eye"}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.loginButton}
        buttonColor={theme.colors.primary}
      >
        Login
      </Button>
      <Button
        mode="text"
        onPress={() => {}}
        textColor={theme.colors.primary}
        style={styles.forgotButton}
      >
        Forgot Password?
      </Button>
      
      <View style={styles.socialContainer}>
        {['Google', 'Facebook', 'Apple'].map((provider) => (
          <Button
            key={provider}
            mode="outlined"
            icon={provider.toLowerCase()}
            onPress={() => {}}
            style={styles.socialButton}
            textColor={theme.colors.primary}
            theme={{ colors: { outline: theme.colors.primary } }}
          >
            {provider}
          </Button>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: theme.colors.background,
  },
  logo: {
    width: 128,
    height: 128,
    marginBottom: 32,
  },
  input: {
    width: '100%',
    marginBottom: 16,
    backgroundColor: theme.colors.surface,
  },
  loginButton: {
    width: '100%',
    marginBottom: 16,
    borderRadius: 24,
  },
  forgotButton: {
    marginBottom: 24,
  },
  socialContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flex: 1,
    marginHorizontal: 4,
  },
}); 