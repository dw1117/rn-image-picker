import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const ImageCarousel = ({ images }) => {
  if (!images.length) {
    return (
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text>No Images Selected</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: "center", fontSize: 18, marginBottom: 10 }}>
        Selected Images
      </Text>

      <Carousel
        width={width}
        height={300}
        scrollAnimationDuration={1200}
        data={images}
        renderItem={({ item, index }) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image
              source={{ uri: item.uri }}
              style={{ width: width - 40, height: 300, borderRadius: 15 }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ImageCarousel;
