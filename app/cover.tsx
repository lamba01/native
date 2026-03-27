import { Image } from "expo-image";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CoverImage = require("../assets/images/coffee.png");

export default function cover() {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image source={CoverImage} style={{ width: "auto", height: "100%" }} />
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.headertext}>
          fall in love with coffee in blissful delight!
        </Text>
        <Text style={styles.paragraph}>
          welcome to our cozy coffee corner, where every cup is a delightful for
          us
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(tabs)")}
          //   onPress={() => Alert.alert("Get Started Pressed")}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "500" }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    // padding: 20,
  },
  imagecontainer: {
    width: "100%",
    height: "75%",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#9E633E",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  headertext: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
    marginTop: -60,
  },
  paragraph: {
    color: "#948b8b",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
  },
  textcontainer: {
    flex: 1,
    gap: 10,
    paddingHorizontal: 25,
  },
});
