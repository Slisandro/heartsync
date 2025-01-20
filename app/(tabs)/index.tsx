import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

// Profile
export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container_header}>
        <Image source={require("@/assets/images/default_profile.png")} style={styles.image_profile} />
        <View style={styles.container_text}>
          <Text style={styles.name}>Joshua Edwards, 29</Text>
          <Pressable style={styles.edit_profile} onPress={() => router.replace("/edit_profile")}>
            <Text style={styles.text_edit_profile}>
              Edit your profile
            </Text>
            <AntDesign name="arrowright" size={14} style={styles.icon} />
          </Pressable>
        </View>
      </View>
      <View style={styles.verification}>
        <AntDesign name="Safety" size={30} style={styles.icon} />
        <View style={styles.paragraph}>
          <Text>Verification adds an extra layer of authenticity and trust to your profile.</Text>
          <Text>Verify your account now!</Text>
        </View>
        <AntDesign name="arrowright" size={20} style={styles.icon} />
      </View>
      <View style={styles.divider}  />
      <View style={styles.plans}>
        <View style={styles.options}>
          <Text>Plans</Text>
          <Text>Safety</Text>
        </View>
        <View style={styles.subscription}>
          <Text style={styles.title_subscription}>HeartSync Premium</Text>
          <Text style={styles.description_subscription}>Unlock exclusive features and supercharge your dating experience.</Text>
          <Pressable style={styles.pressable_subscription}>
            <Text>Upgrade from $7.99</Text>
          </Pressable>
          <EvilIcons name="star" style={styles.star_1} />
          <EvilIcons name="star" style={styles.star_2} />
          <EvilIcons name="star" style={styles.star_3} />
          <EvilIcons name="star" style={styles.star_4} />
        </View>
      </View>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.title_table}>What's included</Text>
          <Text style={styles.title_table}>Free</Text>
          <Text style={styles.title_table}>Premium</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.title_options}>Unlimited swipes</Text>
          <BouncyCheckbox disabled isChecked={true} id='1' style={{ width: 35 }} />
          <BouncyCheckbox disabled isChecked={true} id='2' style={{ width: 35 }} />
        </View>
        <View style={styles.row}>
          <Text style={styles.title_options}>Advanced filters</Text>
          <BouncyCheckbox disabled isChecked={true} id='1' style={{ width: 35 }} />
          <BouncyCheckbox disabled isChecked={true} id='2' style={{ width: 35 }} />
        </View>
        <View style={styles.row}>
          <Text style={styles.title_options}>Remove ads</Text>
          <BouncyCheckbox disabled isChecked={false} id='1' style={{ width: 35 }} />
          <BouncyCheckbox disabled isChecked={true} id='2' style={{ width: 35 }} />
        </View>
        <View style={styles.row}>
          <Text style={styles.title_options}>Undo accidental left swipes</Text>
          <BouncyCheckbox disabled isChecked={false} id='1' style={{ width: 35 }} />
          <BouncyCheckbox disabled isChecked={true} id='2' style={{ width: 35 }} />
        </View>
        <View style={styles.row}>
          <Text style={styles.title_options}>Push you profile to more viewers</Text>
          <BouncyCheckbox disabled isChecked={false} id='1' style={{ width: 35 }} />
          <BouncyCheckbox disabled isChecked={true} id='2' style={{ width: 35 }} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection:"column",
    gap: 30
  },
  container_header: {
    marginTop: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20
  },
  image_profile: {
    width: 120,
    height: 120,
    borderRadius: 10
  },
  container_text: {
    gap: 10
  },
  name: {
    fontSize: 22,
    fontWeight: "bold"
  },
  edit_profile: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#f3f4f6",
    gap: 10,
    flexDirection: "row",
    
  },
  text_edit_profile: {
    color: "#565E6D"
  },
  icon: {
    color: "#565E6D"
  },
  verification: {
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 5,
    gap: 15,
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
    maxWidth: "88%",
    marginHorizontal: "auto",
    flexDirection: "row"
  },
  paragraph: {
    flex: 1,
    gap: 10
  },
  divider: {
    backgroundColor: "#ecedf0",
    height: 2,
    width: "100%",
    marginVertical: 10
  },
  plans: {
    paddingTop: 5,
    gap: 10
  },
  options: {
    marginHorizontal: "auto",
    flexDirection: "row",
    gap: 10,
  }, 
  subscription: {
    backgroundColor: "#f3f6f8",
    padding: 15,
    marginHorizontal: "auto",
    alignItems: "center",
    gap: 15,
    borderRadius: 8
  },
  title_subscription: {
    fontSize: 20
  },
  description_subscription: {
    textAlign: "center"
  },
  pressable_subscription: {
    backgroundColor: "#cfd2da",
    padding: 8,
    borderRadius: 4
  },
  star_1: {
    position: "absolute",
    top: 25,
    left: 50
  },
  star_2: {
    position: "absolute",
    bottom: 30,
    left: 55
  },
  star_3: {
    position: "absolute",
    top: 30,
    right: 50
  },
  star_4: {
    position: "absolute",
    bottom: 30,
    right: 60
  },
  table: {
    flex: 1,
    marginTop: 25,
    gap: 25
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title_table: {
    fontSize: 15,
    fontWeight: 500
  },
  title_options: {
    width: "25%"
  }
});
