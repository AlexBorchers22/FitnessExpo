import { View, Image } from 'react-native';
import { TextInput, Button, Text, HelperText } from 'react-native-paper';
import { useState } from 'react';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (pass: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    return regex.test(pass);
  };

  const handleLogin = () => {
    let isValid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError(
        'Password must be at least 12 characters long and contain uppercase, lowercase, numbers, and special characters'
      );
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      // TODO: Implement actual login logic
      router.replace('/(app)/(tabs)/');
    }
  };

  return (
    <View className="flex-1 bg-white dark:bg-gray-900 p-6">
      <StatusBar style="auto" />
      <View className="items-center mb-12 mt-20">
        <Image
          source={require('../../assets/images/logo.png')}
          className="w-32 h-32"
          resizeMode="contain"
        />
      </View>

      <TextInput
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={setEmail}
        error={!!emailError}
        className="mb-4"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <HelperText type="error" visible={!!emailError}>
        {emailError}
      </HelperText>

      <TextInput
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        error={!!passwordError}
        className="mb-4"
        right={
          <TextInput.Icon
            icon={showPassword ? 'eye-off' : 'eye'}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <HelperText type="error" visible={!!passwordError}>
        {passwordError}
      </HelperText>

      <Button
        mode="contained"
        onPress={handleLogin}
        className="mt-4 py-2"
      >
        Login
      </Button>

      <Button
        mode="text"
        onPress={() => router.push('/(auth)/forgot-password')}
        className="mt-4"
      >
        Forgot Password?
      </Button>

      <View className="flex-row justify-center items-center mt-8">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="mx-4 text-gray-500">OR</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      <Button
        mode="outlined"
        icon="google"
        onPress={() => {/* TODO: Implement Google OAuth */}}
        className="mt-4"
      >
        Continue with Google
      </Button>

      <Button
        mode="outlined"
        icon="facebook"
        onPress={() => {/* TODO: Implement Facebook OAuth */}}
        className="mt-4"
      >
        Continue with Facebook
      </Button>

      <Button
        mode="outlined"
        icon="apple"
        onPress={() => {/* TODO: Implement Apple Sign In */}}
        className="mt-4"
      >
        Continue with Apple
      </Button>
    </View>
  );
} 