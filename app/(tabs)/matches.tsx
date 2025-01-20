import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function MatchesScreen() {
  const [visibleModal, setVisibleModal] = useState<boolean>(true);
  const handleCloseModal: () => void = () => {
    setVisibleModal(!visibleModal)
  }
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.reload}>
          <AntDesign name="reload1" size={20} />
        </Pressable>
        <Text style={styles.title}>HeartSync</Text>
        <Pressable style={styles.filter}>
          <AntDesign name="filter" size={17} />
        </Pressable>
      </View>
      {/* Modal Boarding Matchs */}
      <Modal
        visible={visibleModal}
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.card_container}>
          <Pressable onPress={handleCloseModal} style={styles.pressable_modal}>
            <View style={styles.right}>
              <View style={styles.content}>
                <Text style={styles.title_modal}>Swipe right if you like</Text>
                <Text style={styles.subtitle_modal}>If the person also swipes right on you, it's a match and you can connect. </Text>
              </View>
              <MaterialIcons name="swipe-right" color={"white"} size={25} />
            </View>
            <View style={styles.divisor} />
            <View style={styles.left}>
              <View style={styles.content}>
                <Text style={styles.title_modal}>Swipe left to pass</Text>
                <Text style={styles.subtitle_modal}>If the person is not your cup of tea, simply pass. It's that easy!</Text>
              </View>
              <MaterialIcons name="swipe-left" color={"white"} size={25} />
            </View>
          </Pressable>
        </View>
      </Modal>
      {/* Cards */}
      <View style={styles.card_container}>
        <Image source={require("@/assets/images/default_profile.png")} style={styles.image_profile} />
        <View style={styles.detail_card}>
          <Text style={styles.name}>Racher Miller, 32</Text>
          <Text style={styles.pronouns}>she/her/hers</Text>
          <Text style={styles.occupation}>
            <Ionicons name="bag" size={15} />
            &nbsp;
            Freelance Model
          </Text>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 30
  },
  title: {
    fontSize: 20,
    fontWeight: 600
  },
  reload: {

  },
  filter: {
    borderRadius: 5,
    padding: 8,
    backgroundColor: "#f3f6f8"
  },
  card_container: {
    marginHorizontal: "auto",
    marginVertical: "auto",
    padding: 15,
    width: "94%",
  },
  image_profile: {
    position: "relative",
    height: 475,
    width: "auto",
    borderRadius: 10
  },
  detail_card: {
    position: "absolute",
    bottom: 30,
    left: 30,
    gap: 8
  },
  name: {
    fontSize: 18,
    fontWeight: 500
  },
  pronouns: {
    fontSize: 16
  },
  occupation: {
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  pressable_modal: {
    marginTop: 20,
    backgroundColor: "#b4b8bfEF",
    padding: 15,
    height: 475,
    width: "auto",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    gap: 50
  },
  right: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center"
  },
  left: {
    flexDirection: "row-reverse",
    gap: 15,
    alignItems: "center"
  },
  content: {
    gap: 10,
    width: "80%"
  },
  title_modal: {
    color: "white",
    fontSize: 18,
    fontWeight: 500
  },
  subtitle_modal: {
    color: "white"
  },
  divisor: {
    width: "90%",
    marginHorizontal: "auto",
    backgroundColor: "white",
    height: 1
  }
})