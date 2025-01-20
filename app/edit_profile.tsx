import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable, TextInput } from 'react-native';

// Profile
export default function EditScreen() {
    const handleBack = () => router.replace("/(tabs)");
    const [value, setValue] = useState("");

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container_header}>
                <Pressable onPress={handleBack} style={styles.pressable_header}>
                    {`<-`}
                </Pressable>
                <Text style={styles.title_header}>Edit Profile</Text>
            </View>
            <View style={styles.container_progress_bar}>
                <Text style={styles.title_progress_bar}>Profile completion: 45%</Text>
                <View style={styles.progress_bar}></View>
            </View>
            <View style={styles.photos}>
                <Text>Photos</Text>
                <Text>The main photo is how you appear to others on the swipe view.</Text>
                {/* Grid Photos */}
            </View>
            <View style={styles.about_me}>
                <Text>About me</Text>
                <Text>Make it easy for others to get a sense of who you are.</Text>
                <TextInput
                    editable
                    multiline
                    numberOfLines={4}
                    maxLength={150}
                    onChangeText={text => setValue(text)}
                    value={value}
                    style={styles.textInput}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column",
        gap: 30
    },

});
