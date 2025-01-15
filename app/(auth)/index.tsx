import { router } from 'expo-router';
import { Button, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';

export default function LoginScreen() {
  const handleLogin = () => router.replace("/(tabs)");
  const handleToPrivacyPolity = () => router.replace("/(aux)/privacy-polity");
  const handleToTermsAndConditions = () => router.replace("/(aux)/terms-and-conditions");

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Login</ThemedText>
      <Button
        title="Continue with Apple"
        color="#f194ff"
        onPress={handleLogin}
      />
      <Button
        title="Continue with Facebook"
        color="#f194ff"
        onPress={handleLogin}
      />
      <Button
        title="Use phone number"
        color="#f194ff"
        onPress={handleLogin}
      />
      <ThemedText type="default">
        By signing up you agree to our
        <ThemedText type="link" onPress={handleToTermsAndConditions}>Terms and Conditions</ThemedText>
      </ThemedText>
      <ThemedText type="default">
        See how we use your data in our
        <ThemedText type="link" onPress={handleToPrivacyPolity}>Privacy Policy</ThemedText>
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
