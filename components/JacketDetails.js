import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const JacketDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topStar}>
        <Image
          style={styles.imageStar2}
          source={require("../assets/roundedblack-arrow.png")}
        />
        <Image
          style={styles.imageStar1}
          source={require("../assets/Cart.jpg")}
        />
      </View>
      <View style={styles.imageText}>
        <View>
          <Image
            style={styles.Image}
            source={require("../assets/5ef8829b-ff69-4e0d-8927-ab6f00ef02bf_600x600_e07b3276-a58d-452d-8c88-7b863181b97b_800x.jpg")}
          />
        </View>
      </View>
      <View style={styles.starText}>
        <Text style={styles.jacketText}>Red Jacket</Text>
        <View style={styles.star}>
          <Text style={styles.reviewText}>Review : </Text>
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
          <Image style={styles.imageStar} source={require("../assets/png-clipart-women-s-beige-pea-coat-trench-coat-jacket-double-breasted-overcoat-women-s-coats-holidays-women-accessories.png")} />
        </View>
        <Text style={styles.jacketPrice}></Text>
      </View>
      <View style={styles.renderText}>
        <Text style={styles.renderText}>
          Lorem ipsum dolor sit amet. Aut nisi optio et provident fugit sit
          magni voluptatibus sit quae consequuntur id aliquam enim? Sed dolorem
          delectus sit officia deleniti eum similique vero cum assumenda tenetur
          nam nostrum nulla. Qui ipsa adipisci nam necessitatibus corporis ut
          dolore repellat.
        </Text>
      </View>
      <View style={styles.renderText1}>
        <Text style={styles.renderText2}>
          Material: 75%, cotton 100%
        </Text>
      </View>
      <View style={styles.mainSize}>
        <View style={styles.sizeContainer}>
          <Text style={styles.sizeText}>XS</Text>
        </View>
        <View style={styles.sizeContainer}>
          <Text style={styles.sizeText}>S</Text>
        </View>
        <View style={styles.sizeContainer}>
          <Text style={styles.sizeText}>M</Text>
        </View>
        <View style={styles.sizeContainer}>
          <Text style={styles.sizeText}>L</Text>
        </View>
        <View style={styles.sizeContainer}>
          <Text style={styles.sizeText}>XL</Text>
        </View>
      </View>
      <View style={styles.priceButton}>
        <View style={styles.nextButton2}>
          <Text style={styles.totalAmount}>Total Amount</Text>
          <Text style={styles.price}>$110</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.nextButton1}>
            <Text style={styles.nextButton}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default JacketDetails;

const styles = StyleSheet.create({
  price: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },

  totalAmount: {
    fontWeight: "bold",
    color: "#fafdff",
  },

  nextButton1: {
    width: 120,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    backgroundColor: "#00ffae",
    alignSelf: "flex-end",
    marginHorizontal: 15,
  },

  nextButton2: {
    flexDirection: "column",
    marginHorizontal: 10,
    width: 100,
    marginVertical: 10,
    alignSelf: "flex-start",
  },

  container: {
    justifyContent: "center",
    backgroundColor: "#faf0e6",
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 40,
  },

  nextButton: {
    fontSize: 16,
    marginVertical: 5,
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },

  Image: {
    width: 330,
    height: 310,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
  },

  Heading: {
    marginHorizontal: 10,
    marginTop: 2,
    marginBottom: 20,
  },

  HeadingText: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
  },

  imageText: {
    width: 340,
    height: 340,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 20,
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

  star: {
    flexDirection: "row",
    marginVertical: 5,
  },

  starText: {
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 5,
  },
  jacketText: {
    fontSize: 30,
    fontWeight: "bold",
  },

  jacketPrice: {
    fontSize: 3,
    fontWeight: "bold",
    marginVertical: 10,
    backgroundColor: "teal",
    marginRight: 290,
  },

  topStar: {
    marginHorizontal: 20,
    marginVertical: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reviewText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 2,
  },

  renderText: {
    fontSize: 14.9,
    fontWeight: "bold",
    marginHorizontal: 10,
  },

  renderText2: {
    fontSize: 14.9,
    color: "#f70546",
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: "white",
  },

  renderText1: {
    fontSize: 14.9,
    color: "#f70546",
    fontWeight: "bold",
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "white",
  },

  sizeText: {
    fontSize: 12,
    textAlign: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },

  sizeContainer: {
    flexDirection: "row",
    width: 40,
    height: 40,
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 10,
  },

  mainSize: {
    flexDirection: "row",
    alignSelf: "center",
  },

  priceButton: {
    backgroundColor: "#f70546",
    width: 320,
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 30,
    flexDirection: "row",
  },
});
