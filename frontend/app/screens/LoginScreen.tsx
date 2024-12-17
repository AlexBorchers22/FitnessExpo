import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';

interface LoginScreenProps {
  navigation: NavigationProp<any>;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/icon.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        mode="outlined"
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
      >
        Login
      </Button>
      <Button
        mode="text"
        onPress={() => {}}
        style={styles.forgotButton}
      >
        Forgot Password?
      </Button>
      <View style={styles.socialLogin}>
        <Button
          mode="outlined"
          icon="google"
          onPress={() => {}}
          style={styles.socialButton}
        >
          Google
        </Button>
        <Button
          mode="outlined"
          icon="facebook"
          onPress={() => {}}
          style={styles.socialButton}
        >
          Facebook
        </Button>
        <Button
          mode="outlined"
          icon="apple"
          onPress={() => {}}
          style={styles.socialButton}
        >
          Apple
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  loginButton: {
    width: '100%',
    marginBottom: 15,
  },
  forgotButton: {
    marginBottom: 20,
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  socialButton: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default LoginScreen;

