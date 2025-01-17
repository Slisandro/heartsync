import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Link, router } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

import React from 'react';
import { Image, Text, View } from 'react-native';

export default function LoginScreen() {
  const handleLogin = () => router.replace("/(tabs)");

  return (
    <View style={styles.container}>
      <View style={styles.container_logo}>
        <Image source={require("@/assets/images/heartsync_logo.png")} style={styles.logo} />
        <Text style={styles.title}>HeartSync</Text>
        <Text style={styles.subtitle}>Where Hearts Connect, Love Finds Its Sync.</Text>
      </View>
      <View style={styles.actions}>
        <Pressable
          style={styles.button}
          onPress={handleLogin}
        >
          <AntDesign name='apple-o' color="white" size={15} />
          <Text style={styles.actions_text}>
            Continue with Apple
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={handleLogin}
        >
          <Feather name="facebook" color="white" size={15} />
          <Text style={styles.actions_text}>
            Continue with Facebook
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={handleLogin}
        >
          <Feather name="phone" color="white" size={15} />
          <Text style={styles.actions_text}>
            Use phone number
          </Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text>
          By signing up you agree to our &nbsp;
          <Link href="/(aux)/terms-and-conditions" style={styles.text_link}>Terms and Conditions</Link>
        </Text>
        <Text>
          See how we use your data in our &nbsp;
          <Link href="/(aux)/privacy-polity" style={styles.text_link}>Privacy Policy</Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: "rgba(0,0,0,.2)"
  },
  container_logo: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200
  },
  actions: {
    gap: 10,
    width: "80%"
  },
  button: {
    backgroundColor: "#565e6d",
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 3,
    flexDirection: "row",
    alignItems: "center",
    gap: 15
  },
  icon: {
  },
  actions_text: {
    fontSize: 18,
    color: "white"
  },
  title: {
    fontSize: 32,
  },
  subtitle: {
    fontSize: 12,
    marginTop: 8
  },
  footer: {
    gap: 5,
    marginBottom: 15
  },
  text_link: {
    color: "blue",
  },
});