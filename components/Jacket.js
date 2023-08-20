import React from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";

const Jacket = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topStar}>
        <Image
          style={styles.imageStar2}
          source={require("../assets/roundedblack-arrow.png")}
        />
        <Image style={styles.imageStar1} source={require("../assets/Cart.jpg")} />
      </View>
      <View style={styles.Heading}>
        <Text style={styles.textHeading}>Women's Jacket</Text>
      </View>
      <View style={styles.boxInput}>
        <TextInput
          placeholderTextColor="black"
          placeholder="Select Jacket"
          onChangeText={(email) => {
            console.log(email);
            this.setState({ email: email });
          }}
          style={styles.input}
        />
      </View>
      <View style={styles.imageText}>
        <View>
          <Image
            style={styles.Image}
            source={require("../assets/pinkhooded.png")}
          />
        </View>
        <View style={styles.starText}>
          <Text style={styles.jacketText}>Warm Jacket</Text>
          <View style={styles.Stars}>
            <Image
              style={styles.imageStar}
              source={require("../assets/star_filled.png")}
            />
            <Image
              style={styles.imageStar}
              source={require("../assets/star_filled.png")}
            />
            <Image
              style={styles.imageStar}
              source={require("../assets/star_filled.png")}
            />
            <Image
              style={styles.imageStar}
              source={require("../assets/star_filled.png")}
            />
            <Image
              style={styles.imageStar}
              source={require("../assets/L3.png")}
            />
          </View>
          <Text style={styles.jacketPrice}>D150</Text>
        </View>
      </View>
      <View style={styles.imageText}>
        <View>
          <Image
            style={styles.Image}
            source={require("../assets/794287.jpg")}
          />
        </View>
        <View style={styles.starText}>
          <Text style={styles.jacketText}>Warmer Hoodies</Text>
          <View style={styles.Stars}>
            <Image
              style={styles.imageStar}
              source={require("../assets/star_filled.png")}
            />
            <Image
              style={styles.imageStar}
              source={require("../assets/star_filled.png")}
            />
            <Image
              style={styles.imageStar}
              source={require("../assets/star_filled.png")}
            />
            <Image
              style={styles.imageStar}
              source={require("../assets/L3.png")}
            />
            <Image
              style={styles.imageStar}
              source={require("../assets/L3.png")}
            />
          </View>
          <Text style={styles.jacketPrice}>D30</Text>
        </View>
      </View>
      <View style={styles.imageText}>
        <View>
          <Image
            style={styles.Image}
            source={require("../assets/Windbreaker-Down-Jacket-Detachable-Liner-Thickened-90-White-Duck-Plus-Long-Knee-Down-Jacket-for-Women.jpg")}
          />
        </View>
        <View style={styles.starText}>
          <Text style={styles.jacketText}>Retro Jacket</Text>
          <View style={styles.Stars}>
            <Image
              style={styles.imageStar}
              source={require("../assets/star_filled.png")}
            />
            <Image
              style={styles.imageStar}
              source={require("../assets/star_filled.png")}
            />
            <Image
              style={styles.imageStar}
              source={require("../assets/star_filled.png")}
            />
            <Image
              style={styles.imageStar}
              source={require("../assets/star_filled.png")}
            />
            <Image
              style={styles.imageStar}
              source={require("../assets/star_filled.png")}
            />
          </View>
          <Text style={styles.jacketPrice}>D500</Text>
        </View>
      </View>
      <View style={styles.imageText}>
        <View>
          <Image
            style={styles.Image}
            source={require("../assets/84-849386_short-coat-for-women-png-image-with-transparent.png")}
          />
        </View>
        <View style={styles.starText}>
          <Text style={styles.jacketText}>Women Jacket</Text>
          <View style={styles.Stars}>
            <Image
              style={styles.imageStar}
              source={require("../assets/star_filled.png")}
            />
            <Image
              style={styles.imageStar}
              source={require("../assets/star_filled.png")}
            />
            <Image
              style={styles.imageStar}
              source={require("../assets/star_filled.png")}
            />
            <Image
              style={styles.imageStar}
              source={require("../assets/star_filled.png")}
            />
            <Image
              style={styles.imageStar}
              source={require("../assets/L3.png")}
            />
          </View>
          <Text style={styles.jacketPrice}>D150</Text>
        </View>
      </View>
    </View>
  );
};

export default Jacket;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#f5f1e1",
    borderRadius: 20,
    marginHorizontal: 15,
    marginVertical: 40,
  },

  Image: {
    width: 130,
    height: 135,
    marginHorizontal: 10,
    marginVertical: 15,
    backgroundColor: "white",
    borderRadius: 20,
  },
  Heading: {
    marginHorizontal: 10,
    marginTop: 2,
    marginBottom: 20,
  },

  textHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
  },

  imageText: {
    flexDirection: "row",
  },

  imageStar: {
    width: 20,
    height: 20,
  },

  imageStar2: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    alignSelf: "center",
  },

  imageStar1: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  Stars: {
    flexDirection: "row",
    marginVertical: 5,
  },

  starText: {
    justifyContent: "center",
    marginHorizontal: 5,
    marginVertical: 8,
  },

  jacketText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  jacketPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "teal",
    marginVertical: 1,
  },

  topStar: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  StarsTopArrow: {
    marginTop: 10,
    marginHorizontal: 10,
    alignSelf: "flex-start",
    alignItems: "flex-start",
    borderRadius: 20,
  },
  input: {
    textShadowColor: "",
    fontSize: 15,
    marginVertical: 10,
    marginHorizontal: 10,
  },

  boxInput: {
    alignSelf: "center",
    width: 350,
    borderWidth: 0.5,
    backgroundColor: "white",
    fontSize: 20,
    marginVertical: 1,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});
