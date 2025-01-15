import { router } from 'expo-router';
import { Button, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';

export default function TermsAndContidionsScreen() {
    // @ts-expect-error
    const handleLogin = () => router.replace("/(auth)");

    return (
        <ThemedView style={styles.container}>
            <Button
                title="Back"
                color="#f194ff"
                onPress={handleLogin}
            />
            <ThemedText type="title">Terms and Conditions</ThemedText>
            <ThemedText type="default">
                By signing up you agree to our
                <ThemedText type="link">Terms and Conditions</ThemedText>
            </ThemedText>
            <ThemedText type="default">
                See how we use your data in our
                <ThemedText type="link">Privacy Policy</ThemedText>
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
