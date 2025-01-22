import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';

// Profile
export default function EditScreen() {
    const handleBack = () => router.replace("/(tabs)");
    const [value, setValue] = useState("");

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container_header}>
                <Pressable onPress={handleBack} style={styles.pressable_header}>
                    <Text style={styles.button}>
                        {`<-`}
                    </Text>
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
            <View>
                <Text>My Details</Text>
                <View style={styles.container_list}>
                    <View style={styles.item_list}>
                        {ARRAY_1.map(x => (
                            <ItemList key={x.label} iconName={x.iconName} label={x.label} value={x.value} />
                        ))}
                    </View>
                </View>
                <View style={styles.container_list}>
                    <Text>Most people also want to know:</Text>
                    <View style={styles.item_list}>
                        {ARRAY_2.map(x => (
                            <ItemList key={x.label} iconName={x.iconName} label={x.label} value={x.value} />
                        ))}
                    </View>
                </View>
            </View>
            <View>
                <Text>I enjoy </Text>
                <Text>Adding your interest is a great way to find like-minded connections.</Text>
                <DropdownComponent />
            </View>
            <View>
                <Text>I communicate in</Text>
                <DropdownComponent />
            </View>
            <View>
                <Text>Linked accounts</Text>
                <View style={styles.item_list}>
                    {ARRAY_3.map(x => (
                        <ItemList key={x.label} iconName={x.iconName} label={x.label} value={x.value} />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const DropdownComponent = () => {
    const [selected, setSelected] = useState<string[]>([]);

    return (
        <View style={styles.container}>
            <MultiSelect
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                search
                data={data}
                labelField="label"
                valueField="value"
                // placeholder="Select item"
                searchPlaceholder="Search..."
                value={selected}
                onChange={(item: string[]) => {
                    setSelected(item);
                }}
                renderLeftIcon={() => (
                    <AntDesign
                        style={styles.icon}
                        color="black"
                        name="Safety"
                        size={20}
                    />
                )}
                selectedStyle={styles.selectedStyle}
            />
        </View>
    );
};


const ARRAY_1:
    {
        iconName: "star",
        label: string,
        value: string
    }[] = [
        {
            iconName: "star",
            label: "Occupation",
            value: "Doctor"
        },
        {
            iconName: "star",
            label: "Genre and Pronouns",
            value: ""
        },
        {
            iconName: "star",
            label: "Education",
            value: ""
        },
        {
            iconName: "star",
            label: "Location",
            value: ""
        }
    ]

const ARRAY_2:
    {
        iconName: "star",
        label: string,
        value: string
    }[] = [
        {
            iconName: "star",
            label: "Height",
            value: "Doctor"
        },
        {
            iconName: "star",
            label: "Smoking",
            value: ""
        },
        {
            iconName: "star",
            label: "Drinking",
            value: ""
        },
        {
            iconName: "star",
            label: "Pets",
            value: ""
        },
        {
            iconName: "star",
            label: "Children",
            value: ""
        },
        {
            iconName: "star",
            label: "Zodiac sign",
            value: ""
        },
        {
            iconName: "star",
            label: "Religion",
            value: ""
        }
    ]

const ARRAY_3:
    {
        iconName: "star",
        label: string,
        value: string
    }[] = [
        {
            iconName: "star",
            label: "Instagram",
            value: ""
        },
        {
            iconName: "star",
            label: "Facebook",
            value: ""
        },
        {
            iconName: "star",
            label: "Twitter",
            value: ""
        }
    ]

const ItemList = ({
    iconName,
    label,
    value
}: {
    iconName: "star",
    label: string,
    value: string
}) => (
    <View style={styles.item_list_container}>
        {/* Icon */}
        <MaterialIcons name={iconName} />
        <Text>{label}</Text>
        {value ? <Text>{value}</Text> : <Text>Add {`>`}</Text>}
    </View>
)

const styles = StyleSheet.create({
    button: {
        color: "blue"
    },
    container: {
        backgroundColor: "white",
        flex: 1,
        flexDirection: "column",
        gap: 30
    },
    container_header: {
        width: "100%",
        height: 150
    },
    pressable_header: {
        height: "100%",
        width: "14%",
        fontSize: 25,
        borderWidth: 2
    },
    item_list_container: {
        flexDirection: "row",
        marginBottom: 15,
        gap: 30
    },
    // DROPDOWN 
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});
